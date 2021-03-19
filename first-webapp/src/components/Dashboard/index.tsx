import { Summary } from "../Summary";
import { Container } from "../Dashboard/styles";
import { TransactionTable } from "../TrasactionsTable";

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}