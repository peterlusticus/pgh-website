import Footer from '../footer/footer';
import Navbar from '../header/navbar';

export default function MainContainer(props: { [x: string]: any; children: any; }) {
  const { children } = props;

  return (
    <body className="bg-inherit bg-[url('../public/bg.svg')] bg-no-repeat bg-cover">
      <main id="skip" className="flex flex-col bg-inherit">
        <div className='sticky top-0 w-full z-50'>
          <Navbar />
        </div>
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </body>
  );
}