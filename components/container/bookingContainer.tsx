import BookingNavbar from '../header/bookingNavbar';

export default function BookingContainer(props: { [x: string]: any; children: any; }) {
    const { children } = props;

    return (
        <body>
            <main id="skip" className="flex flex-col">
                <BookingNavbar />
                <div className='py-12'>
                    {children}
                </div>
            </main>
            <p className="mt-8 text-center text-base text-gray-400">&copy; 2024 Richard Peters</p>
        </body>
    );
}