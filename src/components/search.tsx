import { setSearchedImage } from "../redux/searchStore";
import { useDispatch, useSelector } from "react-redux";
import { initial } from "../redux/searchStore";
import { hit } from "../mold/hit";
import axios from "axios";
import { setimages } from "../redux/imagesStore";

interface State {
    search: initial;
};
interface AmountState {
    amount: { amount: number }
};
interface Data {
    total: number;
    totalHits: number,
    hits: hit[];
}
export const Search = () => {
    // default value
    const value = useSelector((state: State) => state.search.searchedImage);
    // per page value
    const perPage = useSelector((state: AmountState) => state.amount.amount);
    const dispatch = useDispatch();
    const handleChanging = (event: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearchedImage(event.target.value));
        if (event.target.value !== "") {
            const data: Promise<hit[]> = fetchData(event.target.value, perPage);
            data.then((res) => {
                dispatch(setimages(res));
            });
        }
        else
            dispatch(setimages([]));
    }
    return (
        <div>
            <input type="text" onChange={handleChanging} defaultValue={value} className="p-3 w-full md:pl-5 md:py-4 md:text-xl bg-gray-200 outline-indigo-300 outline-2 mt-16 mb-10" placeholder="Search Image" />
        </div>
    )
}

// get the data
const fetchData = async (val: string, perPage: number): Promise<hit[]> => {
    const response = await axios.get<Data>(`${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&q=${val}&image_type=photo&per_page=${perPage}&safesearch=true`);
    const data = response.data;
    return data.hits;
}