<div>
	<p>
		Prioritizing client needs means collaborating with team members, project managers, and
		organization staff directly sometimes.
	</p>
	<p>
		<strong>The incredible teams I've worked with span across many client organizations:</strong>
	</p>
	<ul class="client-list">
		<li>
			<a href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank"
				><span>NCBI</span> - National Library of Medicine</a
			>
		</li>
		<li>
			<a href="https://www.cdc.gov/index.htm" target="_blank"
				><span>CDC</span> - Center for Disease Control</a
			>
		</li>

		<li>
			<a href="https://www.nibib.nih.gov/" target="_blank"
				><span>NIBIB</span>- National Institute of Biomedical Imaging and Bioengineering</a
			>
		</li>
		<li>
			<a href="https://www.nidcd.nih.gov/" target="_blank"
				><span>NIDCD</span>
				- National Institute on Deafness and Other Communication Disorders</a
			>
		</li>
		<li>
			<a href="https://nida.nih.gov/" target="_blank"
				><span>NIDA</span> - National Institute on Drug Abuse</a
			>
		</li>
		<li>
			<a href="https://www.niams.nih.gov/" target="_blank"
				><span>NIAMS</span>
				- National Institute of Arthritis and Musculoskeletal and Skin Diseases</a
			>
		</li>
		<li>
			<a href="https://www.niaaa.nih.gov/" target="_blank"
				><span>NIAAA</span> - National Institute of Alcohol Abuse and Alcoholism</a
			>
		</li>
		<li>
			<a href="https://www.nidcr.nih.gov/" target="_blank"
				><span>NIDCR</span> - National Institute of Dental and Craniofacial Research</a
			>
		</li>
		<li>
			<a href="https://www.samhsa.gov/" target="_blank"
				><span>SAMHSA</span> - Substance Abuse and Mental Health Services Administration</a
			>
		</li>
		<li>
			<a href="https://prevention.nih.gov/" target="_blank"
				><span>ODP</span> - Office of Disease Prevention</a
			>
		</li>
	</ul>
</div>

<style lang="scss">
	.client-list {
		list-style: none;
		padding-left: 0;
		li {
			margin-bottom: 0.5em;
			padding-left: 1.5em;
			position: relative;
			&::before {
				content: '#';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%) scale(1);
				font-size: 1.5em;
				line-height: 1;
				color: $primary-blue;
				transition: transform 0.2s ease;
			}
			a {
				text-decoration: none;
				color: $primary-black;
				transition: text-shadow 0.2s ease;
				position: relative;
				span {
					text-decoration: underline;
					color: $primary-blue;
					text-shadow: none;
				}
				&:hover {
					bottom: 1px;
					text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
				}
			}
			a:visited {
				span {
					color: $primary-red;
				}
			}
		}
		&:hover {
			li::before {
				transform: translateY(-50%) scale(0.9);
			}
		}
	}

	.client-list li:hover::before {
		transform: translateY(-50%) scale(0.5);
	}

	.client-list li:hover + li::before {
		transform: translateY(-50%) scale(0.75);
	}
</style>
