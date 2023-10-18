import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/userProvider";
import Account from "./sections/account";
import Settings from "./sections/settings";
import Subscription from "./sections/subscription/index";
import Courses from "./sections/courses";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [showSections, setShowSections] = useState({
    account: false,
    subscription: false,
    settings: false,
    courses: false,
  });

  const Delete = () => {
    alert("delete");
  };

  return (
    <>
      {console.log(user)}
      <div className="contain-black flex flex-col items-center text-2xl font-bold  mt-4">
        <h1 className="text-center">
          Bonjour et bienvenue <br />
          {user.firstName} {user.lastName}
        </h1>
        <div className="flex justify-center py-10">
          <img src={user.photo} alt="" width={100} height={100} />
        </div>
      </div>

      <section className="contain-blue text-center">
        <div className="font-bold underline">
          <div className=" bg-slate-500 font-normal ">
            <div className="grid grid-cols-5 p-10">
              <div>
                <nav>
                  <ul>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setShowSections({
                            account: true,
                            subscription: false,
                            settings: false,
                            courses: false,
                          });
                        }}
                      >
                        Mon compte
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setShowSections({
                            account: false,
                            subscription: true,
                            settings: false,
                            courses: false,
                          });
                        }}
                      >
                        Mon abonnement
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setShowSections({
                            account: false,
                            subscription: false,
                            settings: true,
                            courses: false,
                          });
                        }}
                      >
                        Réglages
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setShowSections({
                            account: false,
                            subscription: false,
                            settings: false,
                            courses: true,
                          });
                        }}
                      >
                        Mes cours
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-span-4">
                {showSections.account ? <Account /> : null}
                {showSections.subscription ? <Subscription /> : null}
                {showSections.settings ? <Settings /> : null}
                {showSections.courses ? <Courses /> : null}
              </div>
            </div>
            <div className="contain-blue text-center">
              <button
                type="button"
                className="p-2 bg-red-500 text-white"
                onClick={() => Delete()}
              >
                Supprimer mon compte
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
