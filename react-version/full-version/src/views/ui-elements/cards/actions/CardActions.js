import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Collapse,
} from "reactstrap"
import { ChevronDown } from "react-feather"
import classnames from "classnames"

class CardActions extends React.Component {
  state = {
    collapse: true,
    reload: false,
    isVisible: true,
    status: "Opened",
    isVisibleAll: true,
    reloadAll: false,
    collapseAll: true,
    statusAll: "Opened"
  }

  refreshCard = () => {
    this.setState({ reload: true })
    setTimeout(() => {
      this.setState({ reload: false })
    }, 2000)
  }
  refreshCardAll = () => {
    this.setState({ reloadAll: true })
    setTimeout(() => {
      this.setState({ reloadAll: false })
    }, 2000)
  }

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }))
  }
  toggleAll = () => {
    this.setState(state => ({ collapseAll: !state.collapseAll }))
  }
  onEntered = () => {
    this.setState({ status: "Opened" })
  }
  onEnteredAll = () => {
    this.setState({ status: "Opened" })
  }

  onEntering = () => {
    this.setState({ status: "Opening..." })
  }
  onEnteringAll = () => {
    this.setState({ statusAll: "Opening..." })
  }

  onEnteredAll = () => {
    this.setState({ statusAll: "Opened" })
  }

  onExited = () => {
    this.setState({ status: "Closed" })
  }

  onExiting = () => {
    this.setState({ status: "Closing..." })
  }

  onExitingAll = () => {
    this.setState({ statusAll: "Closing..." })
  }
  onExitedAll = () => {
    this.setState({ statusAll: "Closed" })
  }

  removeCard = () => {
    this.setState({ isVisible: false })
  }
  removeCardAll = () => {
    this.setState({ isVisibleAll: false })
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="6" sm="12">
            <Card
              className={classnames("card-action", {
                "card-collapsed": this.state.status === "Closed",
                "card-shown": this.state.status === "Opened",
              })}
            >
              <CardHeader>
                <CardTitle>Collapsible</CardTitle>
                <ChevronDown
                  className="collapse-icon"
                  size={15}
                  onClick={this.toggle}
                />
              </CardHeader>
              <Collapse
                isOpen={this.state.collapse}
                onExited={this.onExited}
                onEntered={this.onEntered}
              >
                <CardBody>
                  <p>
                    You can create collapsible card using reactstrap's collapse
                    component, to create a collapsible card you'll have to
                    manage it's collapse state.
                  </p>
                  <p>
                    Click on <ChevronDown size={15} /> to see card collapse in
                    action
                  </p>
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default CardActions
