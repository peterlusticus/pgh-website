/* This example requires Tailwind CSS v2.0+ */
const navigation = {
    main: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Hilfe', href: '/hilfe' },
    ]
}
  
  export default function Footer() {
    return (
      <footer className="z-50">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} className="text-base link-primary text-gray-300 hover:text-gray-300">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-300">&copy; 2024 Richard Peters</p>
          <a rel="me" href="https://mastodon.social/@PGH_Lichtstadt">Mastodon</a>

        </div>
      </footer>
    )
  }