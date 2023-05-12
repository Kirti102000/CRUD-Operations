import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import React from 'react';


function Sample(){



    return (
        
        <div>
<div className="col-md-5">
      <ClayCard>
        <ClayCard.Body>
          <ClayCard.Description displayType="title">
            {"Card Title"}
          </ClayCard.Description>
          <ClayCard.Description truncate={false} displayType="text">
            {
              "Some quick example text to build on the card title and make up the bulk of the card content."
            }
          </ClayCard.Description>
          <ClayButton>{"Go somewhere"}</ClayButton>
        </ClayCard.Body>
      </ClayCard>
      
      
    </div>

        </div>
    )




}
export default Sample;