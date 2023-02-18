import "../styles/radix.css"

export function Header() {

    return (
        <div className='w-full max-w-6xl mx-auto flex items-center justify-between '>
            <div className='bg-stone-800 text-white w-full max-h-12 flex justify-between items-center px-4 m-3 rounded-lg h-32'>
                <button className="px-3 py-3"><h1 className="text-3xl font-bold ">Steelex</h1></button>
                <div className="flex row-span-full justify-between">
                    <button className="px-6">Camisetas</button>
                    <button className="px-6">Moletons</button>
                    <button className="px-6">Regatas</button>
                </div>
                <div className="flex flex-row">
                    <div className="border-spacing-1 border-1 border-white ">
                        <button className="px-6 py-3">Login</button>
                    </div>
                    <div className="border-spacing-1 border-1 border-white ">
                        <button className="px-6 py-3">Cadastre-se</button>
                    </div>
                </div>
            </div>
        </div>

    )
}