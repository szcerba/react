import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {
    const users = [
        {userName: "szcerba", user: "Marcelo Szcerba"}
    ]
    return (
        <section className={"App"}>
            {users.map(({userName, user}) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}>
                    {user}
                </TwitterFollowCard>
            ))}
        </section>
    )
}
