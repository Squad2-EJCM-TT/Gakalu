import { Container, HorizontalLine, InsertCouponButton, InsertCouponButtonText, InsertCouponContainer, InsertCouponInput } from "./style";

export default function AddCoupon({ visible }: { visible: boolean }){
    return(
        <Container visible={visible}>
           <HorizontalLine></HorizontalLine> 
           <InsertCouponContainer>
                <InsertCouponInput placeholder="Cupom"></InsertCouponInput>
                <InsertCouponButton>
                    <InsertCouponButtonText>Usar Cupom</InsertCouponButtonText>
                </InsertCouponButton>
           </InsertCouponContainer>
        </Container>

    );
}