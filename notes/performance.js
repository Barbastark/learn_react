
/***** Optimization *****/ 

/**
 * ---------------------------------
 * ----- ShouldComponentUpdate -----
 * ---------------------------------
 * 
 * * Lifecycle method used in class based components.
 * 
 * * Allows you to determine if a component sould update or not.
 * 
 * * Receives the upcoming state and props so you can compare them
 *   against the currend state and props
 * 
 * * Return value: boolean 
 *    
 * * Don't do deep equality checks in this method since it may 
 *   erase the benefits of using it. 
 */

 /**
  * -------------------------------
  * ----- React.PureComponent -----
  * -------------------------------
  * 
  * * An alternative to React.Component
  * 
  * * Automatically implements shouldComponentUpdate for
  *   shallow props and state comparisons.
  * 
  * * Always use pure component unless you have to implement 
  *   your own shouldComponentUpdate.
  * 
  * * Disallows using the shouldComponentUpdate manually,
  *   attempting to use it will result in a warning.
  * 
  * * Skips rendering all children in the tree automatically,
  *   so they must be "pure" as well.   
  */

  /**
   * ----------------------
   * ----- React.memo -----
   * ----------------------
   * 
   * * Bacically a version of React.pureComponent that can be
   *   used with functional components.
   * 
   * * Higher-order component built by React(released in 16.6)
   * 
   * * Pretty mutch the same as PureComponent, but for functional
   *   components.
   * 
   * * It only comparees prevProps and nextProps (no state checking)
   * 
   * * You can optionally implement your own checking function to 
   *   determine if it should use the memorized result.
   *     
   *     ** This function is kind of like shouldComponentUpdate, except it
   *        should return true if the props are equal and false if they aren't.
   *        This is effectively the opposite approach of shouldComponentUpdate,
   *        which returns true if the component should re-render (i.e.props are different). 
   */

   /**
    * ----------------------------------
    * ----- Premature Optimization -----
    * ----------------------------------
    * 
    * * Defenition: Optimizing your app before measuring performance issues
    * * The above methods for optimization are great tools for fixing performance
    *   issues, don't use them unless you're experiencing performance problems.
    */

  /***** Implementation *****/

  // Passing grandparent function at the bottomm of the script
  export default React.memo(GrandParent)

  // Passing "on the fly"
  export default React.memo(function Parent() {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a Parent Component</p>
            <Child />
            <Child />
        </div>
    )
})

