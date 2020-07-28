import React from 'react'
// import { connect } from 'react-redux'
//import actions


export const BoardForm = () => {
     
    
    return (
        <div>
            <form>
                <input 
                type="text"
                name="board_title"
                placeholder="Catergory"
                />
                <input 
                type="text"
                name="board_description"
                placeholder="Description"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

// const mapStateToProps = state => ({
//     boards, isLoading, error
// })

// export default connect(mapStateToProps
 
    
//     )(BoardForm)