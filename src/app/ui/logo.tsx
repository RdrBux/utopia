import Link from "next/link";

export default function Logo() {
	return (
		<Link href='/' className="flex items-center gap-2">
			<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M16 32H32L16 0H16V32Z" fill="#80D5CF" />
				<path fillRule="evenodd" clipRule="evenodd" d="M16 0L0 32H16L16 0Z" fill="#66AAA6" />
				<path d="M9.53991e-08 32L16 24L16 40L9.53991e-08 32Z" fill="#3B928E" />
				<path d="M32 32L16 24L16 40L32 32Z" fill="#4AB7B2" />
			</svg>


			<svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M52.22 13.0172C52.22 12.3505 52.43 11.7539 52.85 11.2272C53.27 10.7005 53.88 10.2872 54.68 9.9872C55.48 9.68053 56.4534 9.5272 57.6 9.5272H58.5C58.6134 9.5272 58.6834 9.51386 58.71 9.4872C58.7434 9.46053 58.76 9.3872 58.76 9.2672V8.1372C58.76 7.7172 58.7034 7.35053 58.59 7.0372C58.4767 6.72386 58.2834 6.48053 58.01 6.3072C57.7434 6.1272 57.3767 6.0372 56.91 6.0372C56.63 6.0372 56.3634 6.0672 56.11 6.1272C55.8567 6.18053 55.65 6.25386 55.49 6.3472C55.3367 6.44053 55.26 6.54053 55.26 6.6472C55.26 6.7472 55.3 6.8272 55.38 6.8872C55.4667 6.9472 55.55 7.03053 55.63 7.1372C55.71 7.24386 55.75 7.43386 55.75 7.7072C55.75 8.09386 55.6167 8.40386 55.35 8.6372C55.0834 8.87053 54.75 8.9872 54.35 8.9872C53.9567 8.9872 53.6134 8.89053 53.32 8.6972C53.0267 8.50386 52.88 8.17386 52.88 7.7072C52.88 7.23386 53.0167 6.82053 53.29 6.4672C53.5634 6.11386 53.9267 5.82053 54.38 5.5872C54.8334 5.35386 55.3367 5.1772 55.89 5.0572C56.45 4.9372 57.0134 4.8772 57.58 4.8772C58.5134 4.8772 59.25 5.02053 59.79 5.3072C60.33 5.59386 60.71 5.9872 60.93 6.4872C61.1567 6.9872 61.27 7.55386 61.27 8.1872V13.6672C61.27 13.8672 61.32 14.0139 61.42 14.1072C61.5267 14.2005 61.65 14.2472 61.79 14.2472C61.93 14.2472 62.0767 14.2105 62.23 14.1372C62.3834 14.0572 62.5367 13.8905 62.69 13.6372C62.7567 13.5239 62.8334 13.5005 62.92 13.5672L63.52 13.9272C63.6067 13.9805 63.6267 14.0605 63.58 14.1672C63.4267 14.4605 63.2267 14.7239 62.98 14.9572C62.74 15.1839 62.4634 15.3605 62.15 15.4872C61.8434 15.6139 61.5034 15.6772 61.13 15.6772H61.12C60.6334 15.6772 60.2534 15.6072 59.98 15.4672C59.7067 15.3205 59.5 15.1472 59.36 14.9472C59.2267 14.7472 59.12 14.5572 59.04 14.3772C58.98 14.2372 58.9234 14.1672 58.87 14.1672C58.8167 14.1605 58.7434 14.2205 58.65 14.3472C58.5034 14.5139 58.3067 14.7005 58.06 14.9072C57.82 15.1139 57.49 15.2939 57.07 15.4472C56.65 15.6005 56.1067 15.6772 55.44 15.6772C54.4734 15.6772 53.6934 15.4472 53.1 14.9872C52.5134 14.5272 52.22 13.8705 52.22 13.0172ZM55.06 12.6872C55.06 13.2339 55.22 13.6305 55.54 13.8772C55.8667 14.1172 56.25 14.2372 56.69 14.2372C57.2967 14.2372 57.7934 14.0172 58.18 13.5772C58.5667 13.1305 58.76 12.4905 58.76 11.6572V10.7072C58.76 10.5739 58.6934 10.5072 58.56 10.5072H57.8C57.1667 10.5072 56.6467 10.6005 56.24 10.7872C55.84 10.9672 55.5434 11.2205 55.35 11.5472C55.1567 11.8739 55.06 12.2539 55.06 12.6872Z" fill="#111827" />
				<path d="M47.8539 3.46722L47.2739 2.86722C47.1672 2.74722 47.1672 2.63389 47.2739 2.52722L49.3539 0.327222C49.4939 0.167222 49.6772 0.0672226 49.9039 0.0272223C50.1372 -0.0194441 50.3672 -0.00611147 50.5939 0.0672213C50.8206 0.140555 50.9972 0.270556 51.1239 0.457223C51.3439 0.777222 51.4106 1.08722 51.3239 1.38722C51.2439 1.68056 51.0772 1.89722 50.8239 2.03722L48.2139 3.49722C48.1339 3.55056 48.0706 3.57722 48.0239 3.57722C47.9772 3.57722 47.9206 3.54056 47.8539 3.46722ZM46.8739 6.47722H45.5239C45.4239 6.47722 45.3606 6.46389 45.3339 6.43722C45.3072 6.41056 45.2939 6.34722 45.2939 6.24722V5.34722C45.2939 5.16722 45.3806 5.07722 45.5539 5.07722H49.4039C49.4906 5.07722 49.5472 5.09056 49.5739 5.11722C49.6006 5.13722 49.6139 5.19389 49.6139 5.28722V13.8372C49.6139 13.9239 49.6272 13.9872 49.6539 14.0272C49.6806 14.0606 49.7372 14.0772 49.8239 14.0772H51.1639C51.2639 14.0772 51.3306 14.0872 51.3639 14.1072C51.3972 14.1272 51.4139 14.1872 51.4139 14.2872V15.2172C51.4139 15.3239 51.4006 15.3939 51.3739 15.4272C51.3472 15.4606 51.2772 15.4772 51.1639 15.4772H45.5839C45.4772 15.4772 45.4006 15.4639 45.3539 15.4372C45.3139 15.4106 45.2939 15.3439 45.2939 15.2372V14.3772C45.2939 14.2439 45.3139 14.1606 45.3539 14.1272C45.4006 14.0939 45.4839 14.0772 45.6039 14.0772H46.8539C46.9672 14.0772 47.0339 14.0606 47.0539 14.0272C47.0806 13.9939 47.0939 13.9239 47.0939 13.8172V6.72722C47.0939 6.56056 47.0206 6.47722 46.8739 6.47722Z" fill="#111827" />
				<path d="M36.394 10.2671C36.394 10.9871 36.5007 11.6505 36.714 12.2571C36.934 12.8638 37.2374 13.3505 37.624 13.7171C38.0107 14.0838 38.4674 14.2671 38.994 14.2671C39.474 14.2671 39.8974 14.0838 40.264 13.7171C40.6374 13.3505 40.9274 12.8638 41.134 12.2571C41.3407 11.6505 41.444 10.9871 41.444 10.2671C41.444 9.54714 41.3407 8.88381 41.134 8.27714C40.9274 7.67047 40.6374 7.18381 40.264 6.81714C39.8974 6.45047 39.474 6.26714 38.994 6.26714C38.4674 6.26714 38.0107 6.45047 37.624 6.81714C37.2374 7.18381 36.934 7.67047 36.714 8.27714C36.5007 8.88381 36.394 9.54714 36.394 10.2671ZM32.084 6.03714V5.43714C32.084 5.27047 32.114 5.17047 32.174 5.13714C32.234 5.09714 32.3374 5.07714 32.484 5.07714H36.004C36.1507 5.07714 36.2507 5.09714 36.304 5.13714C36.364 5.17714 36.394 5.27381 36.394 5.42714V6.38714C36.394 6.60047 36.414 6.71381 36.454 6.72714C36.494 6.73381 36.5507 6.67714 36.624 6.55714C36.9374 6.02381 37.3574 5.60047 37.884 5.28714C38.4107 4.97381 39.0207 4.81714 39.714 4.81714C40.5274 4.81714 41.2707 5.03047 41.944 5.45714C42.6174 5.88381 43.154 6.50381 43.554 7.31714C43.954 8.13047 44.154 9.11381 44.154 10.2671C44.154 11.4205 43.9474 12.4038 43.534 13.2171C43.1274 14.0305 42.5807 14.6505 41.894 15.0771C41.214 15.5038 40.4674 15.7171 39.654 15.7171C39.0274 15.7171 38.474 15.5938 37.994 15.3471C37.514 15.0938 37.1174 14.7405 36.804 14.2871C36.6574 14.0805 36.5507 13.9938 36.484 14.0271C36.424 14.0538 36.394 14.3305 36.394 14.8571V18.6571C36.394 18.8705 36.4207 19.0038 36.474 19.0571C36.534 19.1105 36.6674 19.1371 36.874 19.1371H37.844C37.9974 19.1371 38.094 19.1571 38.134 19.1971C38.174 19.2438 38.194 19.3438 38.194 19.4971V20.1971C38.194 20.3571 38.174 20.4538 38.134 20.4871C38.094 20.5205 37.994 20.5371 37.834 20.5371H32.434C32.2807 20.5371 32.184 20.5071 32.144 20.4471C32.104 20.3938 32.084 20.2971 32.084 20.1571V19.4871C32.084 19.3471 32.0974 19.2538 32.124 19.2071C32.1574 19.1605 32.2407 19.1371 32.374 19.1371H33.464C33.6574 19.1371 33.774 19.1071 33.814 19.0471C33.8607 18.9871 33.884 18.8571 33.884 18.6571V6.89714C33.884 6.70381 33.8474 6.58714 33.774 6.54714C33.7074 6.50047 33.584 6.47714 33.404 6.47714H32.484C32.304 6.47714 32.1907 6.44714 32.144 6.38714C32.104 6.32714 32.084 6.21047 32.084 6.03714Z" fill="#111827" />
				<path d="M23.9534 10.0771C23.9534 10.8638 24.0168 11.5938 24.1434 12.2671C24.2701 12.9405 24.5001 13.4838 24.8334 13.8971C25.1668 14.3038 25.6468 14.5071 26.2734 14.5071C26.7468 14.5071 27.1334 14.3905 27.4334 14.1571C27.7401 13.9238 27.9768 13.6138 28.1434 13.2271C28.3101 12.8405 28.4268 12.4105 28.4934 11.9371C28.5601 11.4571 28.5934 10.9705 28.5934 10.4771C28.5934 9.69047 28.5301 8.96047 28.4034 8.28714C28.2768 7.61381 28.0468 7.0738 27.7134 6.66714C27.3801 6.2538 26.9001 6.04714 26.2734 6.04714C25.8001 6.04714 25.4101 6.16381 25.1034 6.39714C24.8034 6.63047 24.5701 6.94047 24.4034 7.32714C24.2368 7.7138 24.1201 8.14714 24.0534 8.62714C23.9868 9.10047 23.9534 9.58381 23.9534 10.0771ZM21.1334 10.5071C21.1334 9.44047 21.3268 8.48047 21.7134 7.62714C22.1001 6.76714 22.6734 6.08381 23.4334 5.57714C24.1934 5.07047 25.1401 4.81714 26.2734 4.81714C27.4068 4.81714 28.3534 5.06047 29.1134 5.54714C29.8734 6.03381 30.4468 6.67714 30.8334 7.47714C31.2201 8.27714 31.4134 9.14381 31.4134 10.0771C31.4134 11.1438 31.2201 12.1038 30.8334 12.9571C30.4468 13.8105 29.8734 14.4871 29.1134 14.9871C28.3534 15.4871 27.4068 15.7371 26.2734 15.7371C25.1401 15.7371 24.1934 15.4971 23.4334 15.0171C22.6734 14.5305 22.1001 13.8905 21.7134 13.0971C21.3268 12.3038 21.1334 11.4405 21.1334 10.5071Z" fill="#111827" />
				<path d="M20.5123 13.5571C20.3457 13.9438 20.1257 14.3038 19.8523 14.6371C19.5857 14.9704 19.2457 15.2404 18.8323 15.4471C18.419 15.6471 17.9057 15.7471 17.2923 15.7471C16.439 15.7471 15.819 15.5438 15.4323 15.1371C15.0523 14.7238 14.8623 14.1638 14.8623 13.4571V6.82711C14.8623 6.70044 14.8423 6.61044 14.8023 6.55711C14.7623 6.50378 14.679 6.47711 14.5523 6.47711H13.3323C13.199 6.47711 13.109 6.46044 13.0623 6.42711C13.0223 6.38711 13.0023 6.30044 13.0023 6.16711V5.37711C13.0023 5.23711 13.0223 5.15378 13.0623 5.12711C13.1023 5.09378 13.189 5.07711 13.3223 5.07711C13.689 5.07711 14.0123 5.05044 14.2923 4.99711C14.5723 4.94378 14.8157 4.83044 15.0223 4.65711C15.229 4.48378 15.4123 4.21378 15.5723 3.84711C15.739 3.48044 15.8957 2.98044 16.0423 2.34711C16.069 2.22711 16.0957 2.14711 16.1223 2.10711C16.1557 2.06044 16.2523 2.03711 16.4123 2.03711H17.1023C17.289 2.03711 17.3823 2.13711 17.3823 2.33711V4.73711C17.3823 4.88378 17.409 4.97711 17.4623 5.01711C17.5223 5.05711 17.619 5.07711 17.7523 5.07711H19.8923C20.019 5.07711 20.1023 5.09711 20.1423 5.13711C20.1823 5.17711 20.2023 5.26378 20.2023 5.39711V6.22711C20.2023 6.34044 20.1757 6.41044 20.1223 6.43711C20.0757 6.46378 19.9957 6.47711 19.8823 6.47711H17.7623C17.6357 6.47711 17.539 6.49711 17.4723 6.53711C17.4123 6.57711 17.3823 6.66711 17.3823 6.80711V13.0571C17.3823 13.4371 17.4557 13.7171 17.6023 13.8971C17.749 14.0771 17.9523 14.1671 18.2123 14.1671C18.4657 14.1671 18.6957 14.0804 18.9023 13.9071C19.1157 13.7338 19.3123 13.4738 19.4923 13.1271C19.5457 13.0271 19.5923 12.9671 19.6323 12.9471C19.679 12.9204 19.759 12.9338 19.8723 12.9871L20.3323 13.2171C20.4323 13.2638 20.499 13.3104 20.5323 13.3571C20.5657 13.3971 20.559 13.4638 20.5123 13.5571Z" fill="#111827" />
				<path d="M1.8 12.4571V6.82715C1.8 6.69381 1.78 6.60382 1.74 6.55715C1.70667 6.50382 1.62667 6.47715 1.5 6.47715H0.38C0.24 6.47715 0.14 6.46048 0.08 6.42715C0.0266667 6.39382 0 6.30715 0 6.16715V5.45715C0 5.29715 0.02 5.19382 0.06 5.14715C0.106667 5.10048 0.206667 5.07715 0.36 5.07715H3.93C4.09 5.07715 4.19333 5.09382 4.24 5.12715C4.29333 5.16048 4.32 5.25382 4.32 5.40715V12.2071C4.32 12.8871 4.44667 13.4205 4.7 13.8071C4.96 14.1871 5.36667 14.3771 5.92 14.3771C6.45333 14.3771 6.93 14.2171 7.35 13.8971C7.77 13.5771 8.1 13.1438 8.34 12.5971C8.58 12.0438 8.7 11.4238 8.7 10.7371V6.83715C8.7 6.68382 8.67 6.58715 8.61 6.54715C8.55667 6.50048 8.45667 6.47715 8.31 6.47715H7.33C7.22333 6.47715 7.14333 6.46715 7.09 6.44715C7.04333 6.42048 7.02 6.35381 7.02 6.24715V5.39715C7.02 5.27048 7.03667 5.18715 7.07 5.14715C7.10333 5.10048 7.17667 5.07715 7.29 5.07715H10.95C11.07 5.07715 11.1433 5.10048 11.17 5.14715C11.2033 5.19382 11.22 5.27715 11.22 5.39715V13.7171C11.22 13.8771 11.24 13.9771 11.28 14.0171C11.3267 14.0571 11.4333 14.0771 11.6 14.0771H12.7C12.8 14.0771 12.8767 14.0938 12.93 14.1271C12.99 14.1605 13.02 14.2305 13.02 14.3371V15.1271C13.02 15.2671 13.0033 15.3605 12.97 15.4071C12.9433 15.4538 12.8633 15.4771 12.73 15.4771H9.18C9.02 15.4771 8.92 15.4505 8.88 15.3971C8.84 15.3438 8.82 15.2371 8.82 15.0771V14.0371C8.82 13.9438 8.79333 13.8805 8.74 13.8471C8.68667 13.8138 8.62 13.8638 8.54 13.9971C8.22 14.5105 7.79333 14.9305 7.26 15.2571C6.72667 15.5771 6.02667 15.7371 5.16 15.7371C4.33333 15.7371 3.67333 15.6138 3.18 15.3671C2.69333 15.1138 2.34 14.7438 2.12 14.2571C1.90667 13.7705 1.8 13.1705 1.8 12.4571Z" fill="#111827" />
			</svg>

		</Link>
	)
}