import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export type SosialProps = {
    id: string;
}

export default function sosial({id}:SosialProps){
    return(
        <section id={id} className="h-[90vh] bg-gray-50 flex justify-evenly flex-col items-center">
            <div className="flex flex-col text-center gap-4">
                 <h1 className="text-red-500 text-4xl max-w-3xl font-bold">Join ke komunitas kami</h1>
            <p className="text-gray-500 max-md:text-lg text-wrap max-w-md:">Terhubung dengan para developer lain</p>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                <div className="p-5 flex flex-col min-w-2xs gap-4 rounded-lg border border-gray-300">
                    <div className="flex gap-4">
                        <WhatsAppIcon className="text-green-400"/>
                    <h1 className="text-lg font-bold text-slate-700">Whatsapp</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-500">Join ke komunitas dan share ilmu</p>
                        <Link href={''} className="hover:underline"><span>Bergabung</span><ArrowForwardIcon fontSize="small"/></Link>
                    </div>
                </div>


                 <div className="p-5 flex flex-col min-w-2xs gap-4 rounded-lg border border-gray-300">
                    <div className="flex gap-4">
                        <GitHubIcon className="text-gray-900"/>
                    <h1 className="text-lg font-bold text-slate-700">Github</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-500">Join ke komunitas dan share ilmu</p>
                        <Link href={''} className="hover:underline"><span>Bergabung</span><ArrowForwardIcon fontSize="small"/></Link>
                    </div>
                </div>



            </div>
      </section>
    )
}
