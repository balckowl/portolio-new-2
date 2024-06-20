import Post from "./post"

const postList = [
    {icon: "😃", title: "失敗しました。"},
    {icon: "😃", title: "失敗しました。"},
    {icon: "👶", title: "失敗しました。"},
    {icon: "😃", title: "失敗しました。"},
    {icon: "⚠️", title: "失敗しました。"}
]

const PostList = () => {

    return (
        <div className="py-[90px] lg:py-[140px]">
            <div className="container flex justify-center">
                <div className="w-full lg:w-[80%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Post />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostList