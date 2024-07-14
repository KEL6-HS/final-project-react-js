import React from "react";
import RootLayouts from "../../layouts/RootLayouts";
import PageContent from "../../components/PageContent";

export default function ShopDetails() {
	return (
		<RootLayouts>
			<PageContent label="Shop Detail">
				<section className="block">
					<div className="text-center bg-productBg pt-10 pr-0 pb-14 mb-24">
						<div className="w-full pr-3.5 pl-3.5 mr-auto ml-auto"></div>
					</div>
				</section>
			</PageContent>
		</RootLayouts>
	);
}
