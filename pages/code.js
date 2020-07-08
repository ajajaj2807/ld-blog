import React from 'react'
import Header from '../comps/Header'
import Question from '../comps/Question'

import {questions} from '../questions'

export default function code() {
    
    const easy = questions.filter( q => q.category == 'easy')
    const medium = questions.filter( q => q.category == 'medium')
    const hard = questions.filter( q => q.category == 'hard')

    return (
        <div className="coding-wrapper">
            <Header />
            <h1>Coding Questions</h1>
            <b>Practice algorithms and data structures for coding interviews</b>
            <div className="questions-box">
                <div className="col">
                    <h2 className="col-title">Easy</h2>
                    {
                        easy.map( q => {
                            return(
                                <Question data={q} />
                            )
                        })
                    }
                </div>
                <div className="col">
                <h2 className="col-title">Medium</h2>

                    {
                        medium.map( q => {
                            return(
                                <Question data={q} />
                            )
                        })
                    }
                </div>
                <div className="col">
                <h2 className="col-title">Hard</h2>

                    {
                        hard.map( q => {
                            return(
                                <Question data={q} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="cs-code">
                <span>More questions and features coming soon. <br/>
                Contact me to add a question.</span>
            </div>
        </div>
    )
}
