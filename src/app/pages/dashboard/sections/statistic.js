import { Fragment } from "react";

import { toThousand } from "../utils";

export default function Statistic({ statistic }){
  return(
    <Fragment>
      <div className="relative bg-green-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 className="text-gray-400 uppercase font-bold text-xs">
                        Classes
                      </h5>
                      <span className="font-semibold text-xl text-gray-700">
                        { toThousand(statistic.classes) }
                      </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                        <i className="far fa-chart-bar"></i>
                      </div>
                    </div>
                  </div>
                    <p className="text-sm text-gray-400 mt-4">
                    <span className="text-emerald-500 mr-2">
                      <i className="fas fa-arrow-up"></i> 100%
                    </span>
                    <span className="whitespace-nowrap">
                      Last month
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 className="text-gray-400 uppercase font-bold text-xs">
                        New users
                      </h5>
                      <span className="font-semibold text-xl text-gray-700">
                        { toThousand(statistic.new_users) }
                      </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                        <i className="fas fa-chart-pie"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    <span className="text-red-500 mr-2">
                      <i className="fas fa-arrow-down"></i> 100%
                    </span>
                    <span className="whitespace-nowrap">
                      Last week
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 className="text-gray-400 uppercase font-bold text-xs">
                        New teachers
                      </h5>
                      <span className="font-semibold text-xl text-gray-700">
                        { toThousand(statistic.new_teachers) }
                      </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                        <i className="fas fa-users"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    <span className="text-orange-500 mr-2">
                      <i className="fas fa-arrow-down"></i> 100%
                    </span>
                    <span className="whitespace-nowrap">
                      Last week
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                      <h5 className="text-gray-400 uppercase font-bold text-xs">
                        High Grades
                      </h5>
                      <span className="font-semibold text-xl text-gray-700">
                        { statistic.high_grades }%
                      </span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                        <i className="fas fa-percent"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    <span className="text-emerald-500 mr-2">
                      <i className="fas fa-arrow-up"></i> A+
                    </span>
                    <span className="whitespace-nowrap">
                      Yesterday
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </Fragment>
  );
}