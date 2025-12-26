import GithubIcons from "@mui/icons-material/GitHub"
import Link from "next/link"

export default function Footer() {
    return(
        <main className="h-17 border-t border-gray-200 flex justify-around gap-12 items-center">
            <div>
                <h1 className="text-gray-300 font-bold text-sm">
                    Ngoding.id
                </h1>
            </div>
            <div>
                <Link href={'https://github.com/NgodingID'}><GithubIcons/></Link>
                
            </div>
        </main>
    )
}