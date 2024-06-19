const Header = () => {
    return (
        <div className="container mx-auto h-[80px]">
            <div className="flex justify-between h-full items-center">
                <h1 className="text-[40px]">Portolio</h1>
                <div className="flex gap-4">
                    <div>アイコン</div>
                    <button>ログイン</button>
                </div>
            </div>
        </div>
    )
}

export default Header