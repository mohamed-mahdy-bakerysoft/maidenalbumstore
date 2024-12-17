import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
            <div className="text my-5">
                <h1 className="text-5xl font-bold">Iron Maiden Album Store</h1>
                <p className="text-2xl my-7 px-1 dark:text-slate-300">The Ultimate Iron Maiden store is the worlds most popular Iron Maiden Album Site. Find and rate every Iron Maiden album digitally.</p>
                <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Find Maiden Albums</Link>
            </div>
            <div className="visual my-5 lg:max-w-xl">
                <br/><img className="rounded-lg max-h-full" src="https://img1.picmix.com/output/pic/normal/9/3/1/8/6308139_c55d0.gif" alt="CodeBook Hero Section" />
            </div>
        </section>
    )
}