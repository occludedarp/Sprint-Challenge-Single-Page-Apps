import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default function CharacterCard(props) {

  return( 
    <Link to={`/characters/${props.key}`}>
      <span>
        <div>
          <Card inverse>
            <CardImg width="100%" src={props.image} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>{props.name}</CardTitle>
              <CardText>
              <small className="text-muted">{props.origin}</small>
              </CardText>

              <CardText>
              <small className="text-muted">{props.species}</small>
              </CardText>

              <CardText>
              <small className="text-muted">{props.status}</small>
              </CardText>

            </CardImgOverlay>
          </Card>
        </div>
      </span>
    </Link>
  )
}
