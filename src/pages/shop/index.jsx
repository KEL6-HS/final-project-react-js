import React from "react";
import RootLayouts from "../../layouts/RootLayouts";
import PageContent from "../../components/PageContent";
import Product from "../../components/organisems/Product";

export default function shop() {
	return (
		<RootLayouts>
			<PageContent label="Shop">
				<section className="spad">
					<Product showFilter={false} />
				</section>
			</PageContent>
		</RootLayouts>
	);
}
