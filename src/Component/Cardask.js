import React from 'react'

const Cardask =(props)=> (
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">{props.question}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" className="wask">{props.answer}</th>
                </tr>
            </tbody>
        </table>
    </div>
)
export default Cardask