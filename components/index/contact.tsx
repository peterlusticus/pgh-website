export function ContactSection() {

    return (
        <section className="bg-inerit">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-100 dark:text-white">Kontaktiere uns</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl">Du bist dir unsicher bei der Wahl deines Social Clubs? Oder hast Verbesserungsideen für unseren Club? Benutze das Kontaktformular und wir werden dir schnellstmöglich antworten.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label className="block mb-2 font-medium text-gray-100 dark:text-gray-300">Deine E-Mail</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-mono" placeholder="mustermann@mail.com" required></input>
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-100">Betreff</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-mono" placeholder="Thema deines Anliegens" required></input>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 font-medium text-gray-100">Dein Anliegen</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 font-mono" placeholder="Beschreie uns dein Anliegen"></textarea>
                    </div>
                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                        <button className='ml-2 text-white px-4 py-2 text-base font-medium bg-red-900 hover:bg-red-700 transition'>
                            Absenden
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}