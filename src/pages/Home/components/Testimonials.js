export const Testimonials = () => {
    return (
        <section className='my-20'>
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Maiden Album Testimonials</h1>
            <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Awesome Site for Maiden!!</h3>
                        <p className="my-4 font-light">If you like great music buy Iron Maiden!"</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Johnny Vegas</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Music Enthusiast</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Steve Harris is the best bass player ever!</h3>
                        <p className="my-4 font-light">Maiden's brand of rock and or roll is amazing!"</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Paul Di'Anno</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Former Singer</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing Progressive Melodies!</h3>
                        <p className="my-4 font-light">A musician's dream when it comes to intricate solos and awesome melodies!"</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Adrian Gears</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Guitarist and Philantropist</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fantastic Sound!</h3>
                        <p className="my-4 font-light">You haven't lived until you've heard Iron Maiden!!!"</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Blaze Bailey</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Singer and Frontman</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}