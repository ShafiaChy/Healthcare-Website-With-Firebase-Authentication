import React from 'react';
import workout from '../../Images/workout.jpg'
const Workout = () => {
    return (
        <div className="my-5">
           <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4 mx-auto">
                    <img src={workout} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8 w-lg-50">
                    <div class="card-body">
                        <h5 class="card-title">EXPERT GUIDANCE.ENDLESS POSSIBILITIES.</h5>
                            <p class="card-text">With thousands of guided workouts, The Kardio Klub’s full-body, coach-led workouts are here to help you reach your goals.
                            The Kardio Klub's AI-powered workouts automatically adjust to your every movement to help you reach your goals. Select from curated programs, such as Four Weeks to Fat Loss or Lean Muscle Mastery.</p>
        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Workout;