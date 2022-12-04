import {FiShare2} from 'react-icons/fi' 
import {BsStarFill} from 'react-icons/bs'
import {data} from '../../data/data';
import banku from '../../assets/Jo.jpg'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
const DetailPage = () => {
  
  return (
    <div>
      <Navbar />
      <div className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt=""
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={banku}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {Array(5)
                    .fill("")
                    .map((star, index) => (
                      <BsStarFill color="gold" key={index} />
                    ))}
                  <span className="text-gray-600 ml-3">5 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter dis microdosing tilde DIY. XOXO fam
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>

                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  
                  <Link to={"/checkout/"}>Add to cart</Link>
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <FiShare2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage