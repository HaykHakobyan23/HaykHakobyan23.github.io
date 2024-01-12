import Header from "@/components/Header";
import WhatwedoCart from "@/components/WhatwedoPage";
import { mongooseConnect } from "@/lib/mongoose";
import { Whatwedo } from "@/models/Whatwedo";


export default function WhatwedosPage({whatwedos}){
    return (
        <div>
          <Header />
            <WhatwedoCart whatwedos={whatwedos} />
        </div>
    )
}



export async function getServerSideProps() {
    await mongooseConnect();
    const whatwedos = await Whatwedo.find({}, null, {sort:{'_id':-1}});
    return {
      props:{
        whatwedos: JSON.parse(JSON.stringify(whatwedos)),
      }
    };
  }
  