export const newProfile = (profileData, token) => {
  const postProfile = {
    method: "POST",
    body: JSON.stringify(profileData),
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token
    }
  };
  return fetch("/api/profiles", postProfile).then(res => res.ok);
};

export const getProfile = public_profile_id => {
  const getProfile = {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  };
  return fetch(`/api/profiles/${public_profile_id}`, getProfile).then(res =>
    //   res.json()

    ({
      profile_public_id: "rfrrvvvvfd",
      job_title: "web developer",
      bio: "i worked there",
      //location: "glasgow",
      // employment_status: "",
      experience: [
        {
          company: "Glasgow Power",
          job_title: "boss",
          description: "good job",
          start_date: "2019-10-01",
          end_date: "2020-10-12"
        },
        {
          company: "Glasgow Gas",
          job_title: "superboss",
          description: "super job",
          start_date: "2018-10-01",
          end_date: "2020-10-01"
        },
        {
          company: "Glasgow Water",
          job_title: "hiboss",
          description: "highest job",
          start_date: "2016-10-01",
          end_date: "2018-10-01"
        }
      ],
      education: [
        {
          institution: "Glasgow Uni",
          start_date: "2019-10-01",
          end_date: "2020-10-12"
        },
        {
          institution: "Caledonian Uni",
          start_date: "2018-10-01",
          end_date: "2020-10-01"
        },
        {
          institution: "Straithclyde Uni",
          start_date: "2016-10-01",
          end_date: "2018-10-01"
        }
      ]
    })
  );
};
