import React from "react"
import { amounts } from "../mold/amounts"
import { useDispatch } from "react-redux";
import { setamount } from "../redux/amountStore";

export const Amount = () => {
    const dispatch = useDispatch();
    const handleSubmit = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const value = +event.target.value;
        switch (value) {
            case amounts.sm: dispatch(setamount(amounts.sm));
                break;
            case amounts.md: dispatch(setamount(amounts.md));
                break;
            case amounts.lg: dispatch(setamount(amounts.lg));
                break;
            case amounts.xl: dispatch(setamount(amounts.xl));
                break;
        }
    };
    return (
        <form className="mb-16">
            <label htmlFor="amount" className="mr-4 text-xl font-semibold">Choose amount</label>
            <select name="" defaultValue={amounts.md} onChange={handleSubmit} id="amount" className="py-1 px-4 text-blue-400 text-xl font-semibold outeline-2 outline-blue-400">
                <option value={amounts.sm}>{amounts.sm}</option>
                <option value={amounts.md}>{amounts.md}</option>
                <option value={amounts.lg}>{amounts.lg}</option>
                <option value={amounts.xl}>{amounts.xl}</option>
            </select>
        </form>
    )
}