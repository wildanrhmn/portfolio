import React from 'react'

const Softskills = () => {
  return (
    <div className="skills__content">
        <h3 className='skills__title'>Soft Skills</h3>

        <div className='skills__box'>
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Time Management</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Problem Solving</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Strong Communication</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
            
            <div className="skills__group">
                <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Adaptive</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
            </div>
        </div>
</div>
  )
}

export default Softskills