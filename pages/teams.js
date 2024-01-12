import Header from "@/components/Header";
import TeamPage from "@/components/TeamPage";
import { mongooseConnect } from "@/lib/mongoose";
import { Team as AnotherTeam } from "@/models/Team";


export default function Team({teams}) {
    return (
        <>
         <Header />
         <TeamPage teams={teams} />
        </>
    )
}


export async function getServerSideProps() {
    await mongooseConnect();
    const teams = await AnotherTeam.find({}, null, { sort: { '_id': -1 } });
    return {
        props: {
            teams: JSON.parse(JSON.stringify(teams))
        }
    };
}