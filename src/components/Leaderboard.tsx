import React from "react";

const leaderboardData = [
    { img: "/avatar2.png", name: "Shane Abellana", score: 1310, rank: 2 },
    { img: "/avatar1.png", name: "Gino Deedrick", score: 1355, rank: 1 },
    { img: "/avatar3.png", name: "Robert Paweick", score: 1260, rank: 3 },
];

const tableData = [
    { img: "/avatar1.png", rank: 4, name: "Xiomara Domka", username: "@xiomara", time: "16h 18m 53s", challenges: 26, score: 1230 },
    { img: "/avatar1.png", rank: 5, name: "Caroline Tillo", username: "@caroline", time: "19h 21m 5s", challenges: 32, score: 1190 },
    { img: "/avatar1.png", rank: 6, name: "Myron Battistini", username: "@chanel", time: "12h 30m 39s", challenges: 24, score: 1095 },
];

const Leaderboard = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-6 bg-slate-950 text-white">
            <div className="w-4/5 bg-white bg-opacity-10 p-8 rounded-2xl mt-20 mb-0">
                <div className="flex justify-center gap-6 mb-8">
                    {leaderboardData.map((player, index) => (
                        <div
                            key={index}
                            className={`bg-white bg-opacity-20 p-8 rounded-xl text-center shadow-lg ${player.rank === 1 ? "border-2 border-yellow-400 shadow-yellow-400" : ""
                                }`}
                        >
                            <img src={player.img} alt={player.name} className="w-20 h-20 rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold">{player.name}</h3>
                            <p>Score: {player.score}</p>
                            <p className="text-lg font-semibold">Rank #{player.rank}</p>
                        </div>
                    ))}
                </div>

                <table className="w-full border-separate border-spacing-y-6">
                    <thead>
                        <tr className="bg-purple-900 text-white"
                            style={{
                                backgroundColor: "#655584"
                            }}
                        >
                            <th className="p-4">Icon</th>
                            <th className="p-4">Rank</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Username</th>
                            <th className="p-4">Total Time</th>
                            <th className="p-4">Challenges</th>
                            <th className="p-4">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((player, index) => (
                            <tr key={index} className="bg-[#1c1a46] text-white shadow-md rounded-xl hover:bg-opacity-50">
                                <td className="p-4 text-center">
                                    <img src={player.img} alt={player.name} className="w-12 h-12 rounded-full mx-auto" />
                                </td>
                                <td className="p-4">{player.rank}</td>
                                <td className="p-4">{player.name}</td>
                                <td className="p-4">{player.username}</td>
                                <td className="p-4">{player.time}</td>
                                <td className="p-4">{player.challenges}</td>
                                <td className="p-4">{player.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
