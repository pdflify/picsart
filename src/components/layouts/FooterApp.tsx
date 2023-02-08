import Link from "next/link";

const footernav = [
  { name: 'Privacy Policy', href: '/yyt' },
  { name: 'Terms', href: '/#jhj' },
  { name: 'Contact', href: '/about', },
  { name: 'Advertisement', href: '/#ytyt', target:'_blank'},
]

export default function FooterApp() {
  return (
    <footer className=" bg-gray-100 dark:bg-slate-800 lg:px-28">
      <div className="flex items-center justify-center lg:justify-between text-center lg:text-left flex-wrap py-4 w-full max-w-screen-xl mx-auto">
        <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
          <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <div className="lg:grow">
              <span className="text-gray-800 dark:text-gray-300 block lg:inline-block mb-2 lg:mb-0 lg:mr-8">
                © {new Date().getFullYear()} ~ <Link href={`${process.env.NEXT_PUBLIC_HOST}`}>
      {process.env.NEXT_PUBLIC_APP}
      </Link>
              </span>
              {footernav.map((item) => (
                <Link  key={item.name} href={item.href} target={item.target}
                className="px-1 hover:text-orange-400 text-gray-900 dark:text-gray-300">                 
                  
                    {item.name}
                 
                </Link>   
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          
        </div>
      </div>
    </footer>
  )
}
