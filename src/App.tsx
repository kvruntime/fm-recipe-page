import './App.css'
import omelette from "/public/images/image-omelette.jpeg"

function App() {

  return (
    <section className='flex flex-col min-h-screen bg-[--stone-100]'>
      <div className='grow flex flex-col items-center justify-center'>

        <article className='omelette'>
          <picture className='rounded-[--omellete-radius] overflow-hidden'>
            <img src={omelette} alt="omelette" />
          </picture>
          <div className='omelette-header my-4'>
            <h1 className='text-3xl my-4'>Simple Omelette Recipe</h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className='omelette-body '>
            <div className='my-4 bg-[--rose-bg] rounded-lg p-3'>
              <h2 className='text-[--rose-800] font-[400] mt-2 mb-4'>Preparation time</h2>
              <ul className='list-disc'>
                <li className='ml-6 pl-3'><span className='text-[--stone-900] font-[700]'>Total:</span> Approximately 10 minutes</li>
                <li className='ml-6 px-3'><span className='text-[--stone-900] font-[700]'>Preparation:</span> 5 minutes</li>
                <li className='ml-6 pl-3'><span className='text-[--stone-900] font-[700]'>Cooking:</span> 5 minutes</li>
              </ul>
            </div>

            <div className='my-6'>
              <h2 className='text-[--brown-800] text-2xl mb-3'>Ingredients</h2>
              <ul className='list-disc'>
                <li className=' ml-6 pl-3'>2-3 large eggs</li>
                <li className=' ml-6 pl-3'>Salt, to taste</li>
                <li className=' ml-6 pl-3'>Pepper, to taste</li>
                <li className=' ml-6 pl-3'>1 tablespoon of butter or oil</li>
                <li className=' ml-6 pl-3'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
              </ul>
            </div>
            <hr />
            <div className='my-6'>
              <h2 className='text-[--brown-800] text-2xl mb-4'>Instructions</h2>
              <ol className='list-decimal intruction-list'>
                <li className='ml-5'>
                  <span className='font-[800]'>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                  You can add a tablespoon of water or milk for a fluffier texture.
                </li>
                <li >
                  <span className='font-[800]'>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
                </li>
                <li >
                  <span className='font-[800]'>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                  the eggs evenly coat the surface.
                </li>
                <li >
                  <span className='font-[800]'>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
                  middle, sprinkle your chosen fillings over one half of the omelette.
                </li>
                <li >
                  <span className='font-[800]'>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the
                  fillings. Let it cook for another minute, then slide it onto a plate.
                </li>
                <li >
                  <span className='font-[800]'>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
                </li>
              </ol>
            </div>
            <hr />

            <div className='my-6'>
              <h2 className='text-[--brown-800] mb-3 text-2xl'>Nutrition</h2>

              <p>The table below shows nutritional values per serving without the additional fillings.</p>

              <table className='nutrition-table table-fixed border-collapse my-5 w-full'>
                <tbody>
                  <tr className=''>
                    <td className='pl-5 border-b border-black'>Calories</td>
                    <td className='font-semibold text-[--brown-800]'>277kcal</td>
                  </tr>


                  <tr>
                    <td className='pl-5'>Carbs</td>
                    <td className='font-semibold text-[--brown-800]'>0g</td>
                  </tr>
                  <tr>
                    <td className='pl-5'>Protein</td>
                    <td className='font-semibold text-[--brown-800]'>20g</td>
                  </tr>
                  <tr>
                    <td className='pl-5'>Fat</td>
                    <td className='font-semibold text-[--brown-800]'>22g</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </article>

      </div >

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </section >
  )
}

export default App
