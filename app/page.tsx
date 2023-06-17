export default function Home() {
  return <>
    <header className="h-20 bg-stone-950  content-center flex flex-wrap text-3xl justify-between px-10  ">
      <div className="text-left  flex flex-wrap">Test Page, NextJs</div>
      <div className=" flex flex-wrap">
        
        <nav className="flex sm:justify-center space-x-4">
    {[
      ['Portfolio', '/portfolio'],
      ['Other Projects', '/Projects'],
    ].map(([title, url]) => (
      <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
    ))}
  </nav>
      </div>
    
    
    
    </header>
  </>
} 
