import { Checkout as CheckoutSource } from "SourceRoute/Checkout/Checkout.component";

import ContentWrapper from "Component/ContentWrapper";
import ProgressBar from "Component/ProgressBar/ProgressBar";
import "./Checkout.override.style.scss";

export class Checkout extends CheckoutSource {
  render() {
    const { checkoutStep } = this.props;

    return (
      <main block="Checkout">
        <ProgressBar checkoutStep={checkoutStep} stepMap={this.stepMap} />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
