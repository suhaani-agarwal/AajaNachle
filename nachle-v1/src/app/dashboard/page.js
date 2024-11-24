import React from 'react'
const page = () => {
  const listItems = [
    {
      title: 'First Item Title',
      description: 'This is a detailed description of the first item. You can add multiple lines of content here. The component will automatically adjust to fit your content. Add more details as needed to fill the space effectively.',
      subtitle: 'Additional information can go here',
      sideImage: 'Prateek-aneja.png',
      bgImage: '/api/placeholder/800/400'
    },
    {
      title: 'Second Item Title',
      description: 'Detailed description for the second item. Feel free to add as much content as needed. The container will expand accordingly. This space can accommodate several lines of text while maintaining readability.',
      subtitle: 'More details about the second item',
      sideImage: 'dharmik.jpg',
      bgImage: '/api/placeholder/800/400'
    },
    {
      title: 'Third Item Title',
      description: 'Here is the content for the third item. The text color smoothly transitions on hover to create an engaging effect. You can include important details and key points about your content in this section.',
      subtitle: 'Extra information for the third item',
      sideImage: 'gauruv.png',
      bgImage: '/api/placeholder/800/400'
    },
    {
      title: 'Fourth Item Title',
      description: 'Content for the fourth item goes here. The rounded corners and smooth transitions create a modern look. This expanded space allows for comprehensive content presentation.',
      subtitle: 'Additional context for the fourth item',
      sideImage: 'akky.png',
      bgImage: '/api/placeholder/800/400'
    }
  ];


  return (
    <>
  <div className="relative mb-32">
      {/* Navigation */}
      <div className="flex mt-6 absolute justify-between top-0 text-white w-full z-10 font-cinzel font-bold text-xl">
        <div className="ml-7">
          Mudra
        </div>
        <div className="flex gap-10 mr-7">
          <div>Home</div>
          <div>Login</div>
        </div>
      </div>

      {/* Image container with gradient */}
      <div className="relative">
        <img 
          src="mudra.png" 
          alt="" 
          className="opacity-50 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        />
      </div>

      {/* Centered Text */}
      <div className="absolute top-[350px] left-[700px] text-8xl font-cinzel font-bold text-white">
        Mudra
      </div>
  </div>
  <div className='bg-black'>
      
      <div classname="h-screen overflow-auto bg-black">
        <div className='w-full text-center text-5xl my-10 font-cinzel font-bold bg-black text-white'>
          Upcoming Classes
        </div>
        <div className="w-4/5 mx-auto p-6">
      <ul className="space-y-8">
        {listItems.map((item, index) => (
          <li
            key={index} 
            className="relative h-64 p-6 rounded-2xl shadow-md 
                       transition-all duration-500 ease-in-out
                       hover:scale-110 hover:shadow-xl
                       hover:p-8 hover:rounded-3xl
                       border border-gray-200 cursor-pointer
                       transform-gpu overflow-hidden
                       group"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={item.bgImage} 
                alt="" 
                className="w-full h-full object-cover opacity-20 
                         transition-transform duration-500 
                         group-hover:scale-105"
              />
              <div className="absolute inset-0 
                            group-hover:bg-white/90 
                            transition-colors duration-500" 
              />
            </div>

            {/* Side Image */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-56 h-56
                          rounded-xl overflow-hidden shadow-lg
                          transition-all duration-500
                          group-hover:scale-105 group-hover:shadow-xl">
              <img 
                src={item.sideImage} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 ml-80">
              <h3 className="text-2xl font-semibold mb-4
                            transition-colors duration-300
                            text-white group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-white mb-4
                           transition-colors duration-300
                           group-hover:text-gray-800 
                           leading-relaxed text-lg">
                {item.description}
              </p>
              <p className="text-base text-white
                           transition-colors duration-300
                           group-hover:text-blue-500">
                {item.subtitle}
              </p>
            </div>
          </li>
        ))}
        <button
          className="w-full p-5 mt-4 bg-blue-500 text-white rounded-2xl
                     transition-all duration-300 ease-in-out
                     hover:bg-blue-600 hover:shadow-xl hover:scale-105
                     flex items-center justify-center
                     text-lg font-medium"
        >
          See All
        </button>
      </ul>
    </div>
      </div>
      <div>
        
      </div>
  </div>
  <div>
    
  </div>





    </>
  )
}

export default page