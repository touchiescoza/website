import React from 'react';

const Leagues = () => {
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
                                    Zoo Lake{/*league name*/ }
                                </p>
                                <p className="text-sm text-body truncate">
                                    6 Down League| Thursdays | 6:30 PM {/*touch type, day and time */}
                                </p>
                            </div>
                            <div className="inline-flex items-center font-medium text-heading">
                                71 westwold way,randburg,gp{/*location*/}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-full max-w-xl p-6 bg-neutral-primary-soft border border-default rounded shadow-xs">
            <div className="flow-root">
                <ul role="list" className="divide-y divide-default">
                    <li className="py-4 sm:py-4">
                        <div className="flex items-center gap-2">

                            <div className="flex-1 min-w-0 ms-2">
                                <p className="font-medium text-heading truncate">
                                    Zoo Lake{/*league name*/ }
                                </p>
                                <p className="text-sm text-body truncate">
                                    6 Down League| Thursdays | 6:30 PM {/*touch type, day and time */}
                                </p>
                            </div>
                            <div className="inline-flex items-center font-medium text-heading">
                                71 westwold way,randburg,gp{/*location*/}
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