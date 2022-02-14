import React from "react";
import useEffect from "react";

import ProjectService from "../../service/projets-service";

function Admin() {
  const [projets, setProjets] = React.useState(null);
  React.useEffect(() => {
    ProjectService.get().then((response) => {
      console.log(response.data);
      setProjets(response.data);
    });
  }, []);

  if (!projets) {
    return <div>wait...</div>;
  }
  const results = projets.map((projet) => (
    <>
      <tr key={projet.id}>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{projet.id}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{projet.titre}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {projet.description}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {projet.dateCreation}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{projet.montant}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {functionStatut(projet.statut)}
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{projet.organisme}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className=" whitespace-no-wrap flex space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                ProjectService.editStatuttOneProject(projet.id, "v");
                window.location.reload(false);
              }}
            >
              Accepté
            </button>
            <button
              className="bg-blue-500 btn-ref hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                ProjectService.editStatuttOneProject(projet.id, "n");
                window.location.reload(false);
              }}
            >
              Refusée
            </button>
          </p>
        </td>
      </tr>
    </>
  ));

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">
              La Gestion des projets bénévoles
            </h2>
            <span className="text-xs">Tous les projets</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="lg:ml-40 ml-10 space-x-8">
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr key={1}>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Id
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Titre
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date de creation
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Montant
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Organisme
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                {results}
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function functionStatut(statut) {
  if (statut == "v")
    return (
      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
        <span
          aria-hidden
          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
        ></span>
        <span className="relative">Accepté</span>
      </span>
    );
  else if (statut == "n")
    return (
      <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
        ></span>
        <span class="relative">Refusée </span>
      </span>
    );
  else
    return (
      <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
        <span
          aria-hidden
          class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
        ></span>
        <span class="relative">En cours </span>
      </span>
    );
}

export default Admin;
