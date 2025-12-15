import { time } from 'node:console';
import React from 'react';

const Leagues = () => {
    const leagues = [
        {
            name: 'Zoo Lake',
            Location : '71 westwold way,randburg,gp',
            type: '6 Down League',
            day: 'Thursdays',
            time: '6:30 PM',
            Website: 'www.zoolaketownship.co.za',
            Contact: '0000000000',
            Email: 'zoolake@gmail.co.za'
        },
    ]
  return (
    <main className="text-black flex flex-col text-lg p-3 m-6 space-y-6">
        <h5 className="text-xl font-semibold leading-none text-heading p-4 m-6">Leagues</h5>
        <div className="w-full max-w-xl p-6 bg-neutral-primary-soft border border-default rounded shadow-xs">
            <div className="flow-root">
                <ul role="list" className="divide-y divide-default">
                    <li className="py-4 sm:py-4">
                        <div className="flex items-center gap-2">

                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    {leagues[0].name}
                                </p>
                                <p className="text-sm text-body truncate">
                                    {leagues[0].type} {/*touch type, day and time */}
                                </p>
                                <p className="text-sm text-body truncate">
                                    {leagues[0].day} {/*touch type, day and time */}
                                </p>
                                <p className="text-sm text-body truncate">
                                    {leagues[0].time} {/*touch type, day and time */}
                                </p>
                            </div>
                            <div className="inline-flex items-center font-medium text-heading">
                                {leagues[0].Location}{/*location*/}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
  )
}

export default Leagues