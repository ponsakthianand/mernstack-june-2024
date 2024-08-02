import { useEffect, useState } from 'react';
import { apiUrl } from '../utils/global';

const Home = () => {
  const [userData, setUserdata] = useState([]);

  const usercall = () => {
    fetch(`${apiUrl}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        setUserdata(data);
      })
      .catch((error) => {
        console.error('rrrrr', error);
      });
  };

  // const userData = [
  //   { name: 'Amanda Harvey', email: 'amanda@email.com' },
  //   { name: 'Amanda', email: 'abeamanda@email.com' },
  //   { name: 'Harvey', email: 'amandaabe@email.com' },
  //   { name: 'Amanda Harvey', email: 'amanda@abyemail.com' },
  // ];

  useEffect(() => {
    usercall();
  }, []);

  return (
    <div className='min-h-[700px] max-w-[85rem] w-full mx-auto  px-4 py-10'>
      <div className='flex'>
        <div className='w-full'>
          Tailwind CSS Skeleton Skeleton Tailwind CSS acts as a temporary
          placeholder for loading content. Enhances user experience by reducing
          perceived loading times in content-heavy pages. About Placeholders can
          be used to enhance the experience of your application. They're built
          only with HTML and CSS, meaning you don't need any JavaScript to
          create them. You will, however, need some custom JavaScript to toggle
          their visibility. Their appearance, color, and sizing can be easily
          customized with our utility classes. When to use: When a resource
          needs long time to load. When the component contains lots of
          information, such as List or Card. Only works when loading data for
          the first time. Could be replaced by Spin in any situation, but can
          provide a better user experience.
        </div>
        <div className='w-full'>
          {userData?.length ? (
            userData?.map((user, index) => {
              const id = Math.random().toString(16).slice(2);
              console.log('rrrrr', id);
              return (
                <div
                  key={id}
                  className='max-w-xs mb-2 p-3 flex items-center gap-x-3 bg-white border border-gray-200 rounded-xl shadow-sm'
                >
                  <div className='grow'>
                    <h4 className='font-semibold text-sm text-gray-800'>
                      {user?.name}
                    </h4>
                    <p className='text-sm text-gray-800 md:text-gray-500'>
                      {user?.profession}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <>No users found!</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
