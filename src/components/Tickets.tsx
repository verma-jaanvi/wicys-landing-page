import React from 'react'
import ArrowButton from './ui/ArrowButton'

export const Tickets = () => {
    return (
        <div id="ticket" className="flex flex-col w-full h-auto relative px-12 py-24 md:p-24 gap-6 text-white bg-white overflow-hidden"
            style={{
                backgroundColor: "#1d1238"
            }}
        >
            <p className="text-2xl text-purple-600">Tickets</p>
            <h2 className='text-2xl md:text-4xl w-full md:max-w-3xl '>
                Choose from a variety of tickets options organized by Wicys Events.
            </h2>
            <div className='flex flex-col md:flex-row mt-6 gap-6 relative'>
                <div className="flex flex-col p-3 flex-grow rounded-md bg-[#130c25] shadow-[0_0_25px_black]">
                    <h3 className='font-bold text-xl'>
                        Audience Pass
                    </h3>
                    <p>
                        We are excited to have you as an audience with us.
                    </p>
                    <hr className='my-6' />
                    <h4 className='font-bold text-4xl'>
                        Rs. 100
                    </h4>
                    <ArrowButton>Buy Ticket</ArrowButton>
                </div>
                <div className="flex flex-col p-3 flex-grow rounded-md bg-[#130c25] shadow-[0_0_25px_black]">
                    <h3 className='font-bold text-xl'>
                        Participant Pass
                    </h3>
                    <p>
                        Having you play alongside other teams to make a mark.
                    </p>
                    <hr className='my-6' />
                    <h4 className='font-bold text-4xl'>
                        Rs. 150
                    </h4>
                    <ArrowButton>Buy Ticket</ArrowButton>
                </div>
            </div>
        </div>
    )
}
