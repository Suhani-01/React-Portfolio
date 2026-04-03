import React from 'react'

const Profiles = ({profileDetails}) => {

    // {
    //   icon:"/images/leetcode.png",
    //   profile:"LeetCode",
    //   userName:"Suhani_01",
    //   profileimg:"/images/profile.jpg",
    //   description:"Solved 300+ problems on LeetCode",
    //   link:"https://leetcode.com/u/Suhani_01/",
    // },

  return (
    <div className='profile-card'>

        {/* //platform */}
        <div className='profile-platform'>
            <img alt='platform-icon' src={profileDetails.icon} />

            <p>{profileDetails.profile} Profile</p>
        </div>
        


        <div className='profile-details'>
            <div className='user-profile'>
                <span className='user-profile-image'><img src={profileDetails.profileimg}/></span>
                <span>
                    <p className='user-name'>{profileDetails.userName}</p>
                    <p className='user-desc'>{profileDetails.description}</p>
                </span>
            </div>

            <hr/>

            <div className='profile-link'>
                <a target='blank' href={profileDetails.link}>View {profileDetails.profile} Profile ➔ </a>
            </div>
        </div>
    </div>
  )
}

export default Profiles
