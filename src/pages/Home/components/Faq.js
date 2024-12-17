import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
            "id": 1,
            "question": "Why should I use the Iron Maiden Album Store?",
            "answer": "Because you'd be alot cooler if you did!"
        },
        {
            "id": 2,
            "question": "Can I listen to the maiden albums on my mobile device?",
            "answer": "You can! With integration of something like Spotify or iTunes!"
        },
        {
            "id": 3,
            "question": "Do you offer refunds?",
            "answer": "Sure do, but why would you want one? You'll never want to buy anything else!"
        },
        {
            "id": 4,
            "question": "Do you support other types of payments (bitcoin/ethereum)?",
            "answer": "Not quite yet, but Maiden 3.0 should start accepting those types of payments!"
        }
    ];

    return (
        <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                { faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                )) }
            </div>
        </section>
    )
}