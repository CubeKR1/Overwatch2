let iconArr = [
    { name: "Biotic Rifle", hero: "Ana", link: "https://workshop.codes/assets/abilities/50/biotic-rifle-3559cba4c9f1d9b3a1ccb295a3453b525989501dbca0b9e41bb0ff8d58f18f68.png" },
    { name: "Sleep Dart", hero: "Ana", link: "https://workshop.codes/assets/abilities/50/sleep-dart-c328e9c6bc80d274557cc3fab3f33d3664226b9508e758164ca96c258a8c46c4.png" },
    { name: "Biotic Grenade", hero: "Ana", link: "https://workshop.codes/assets/abilities/50/biotic-grenade-db5c14c9aaa40eadb6bf0de170e3261a0a5e4eacd9af1f9bbc744c206d3e4cf3.png" },
    { name: "Nano Boost", hero: "Ana", link: "https://workshop.codes/assets/abilities/50/nano-boost-4985d447cfb94f8b31755b7db41ff7b44264a73f47627d0575acb3219a1de3eb.png" },
    { name: "The Viper", hero: "", link: "https://workshop.codes/assets/abilities/50/the-viper-890c79965fad0f3542ae30f415cad843af4e65d5aed9c0f2f95eba1cb65080f8.png" },
    { name: "Coach Gun", hero: "", link: "https://workshop.codes/assets/abilities/50/coach-gun-be10f97bbd38573caed166ef67b312c10cf65435ea10f2faa927db05f6344a9a.png" },
    { name: "Dynamite", hero: "", link: "https://workshop.codes/assets/abilities/50/dynamite-3df5d260b20d38ca2f6c9115762b413146f8039a9310968f623e7e9824a10ced.png" },
    { name: "Bob", hero: "", link: "https://workshop.codes/assets/abilities/50/bob-29de5a18bb66c16215a64b8b2ffa23f3b83691b870e4c15997affeb61e05239a.png" },
    { name: "Biotic Launcher", hero: "", link: "https://workshop.codes/assets/abilities/50/biotic-launcher-cb11e2b52aaee4b6b61659a2707a507adda7ac8ed67f2e21dd05d39745e0178a.png" },
    { name: "Biotic Launcher Alt Fire", hero: "", link: "https://workshop.codes/assets/abilities/50/biotic-launcher-alt-fire-0e18814d1204d01fdf0683fb0e86fe84a7e9aa48f8b1f38cd66811340e3e6543.png" },
    { name: "Regenerative Burst", hero: "", link: "https://workshop.codes/assets/abilities/50/regenerative-burst-e31a7e9cdbd61fc7f92987dcb2dad21aa3b2c2c260efc2ecaa1028d7dbbb4d63.png" },
    { name: "Immortality Field", hero: "", link: "https://workshop.codes/assets/abilities/50/immortality-field-7dc26800549a3ede9616afffd1174936b3f17d070af4089db3232754de0a588d.png" },
    { name: "Amplification Matrix", hero: "", link: "https://workshop.codes/assets/abilities/50/amplification-matrix-7ced3f27f1bac838f466bc522d711321768aaa6d4446a2506f1c3de5cc742dda.png" },
    { name: "Exo Boots", hero: "", link: "https://workshop.codes/assets/abilities/50/exo-boots-23398e42106bd14c2e92225b957fce1cb4b103cbff853542adda5fd28029ab98.png" },
    { name: "Configuration Assault", hero: "", link: "https://workshop.codes/assets/abilities/50/configuration-assault-53c5d841839e7fa463b1d61029f23ac9d7b678609f95f04ca12ff045d38c5613.png" },
    { name: "A 36 Tactical Grenade", hero: "", link: "https://workshop.codes/assets/abilities/50/a-36-tactical-grenade-5080fec6b0a708ef0e370abe0298743031f06db8e91d68e4a29a54bb23a566c6.png" },
    { name: "Reconfigure", hero: "", link: "https://workshop.codes/assets/abilities/50/reconfigure-47dc731f9a558db2488417692a53efd9d426795330e548210d19d55c4a246947.png" },
    { name: "Configuration Artillery", hero: "", link: "https://workshop.codes/assets/abilities/50/configuration-artillery-a6fef172b263c55a5cab90012e04b99f36c5e28fd72a479c02a714890836f906.png" },
    { name: "Rocket Flail", hero: "", link: "https://workshop.codes/assets/abilities/50/rocket-flail-63641c410fd0c277a76a68026071edcf450c327604a7b003b31b79e88047ee61.png" },
    { name: "Barrier Shield", hero: "", link: "https://workshop.codes/assets/abilities/50/barrier-shield-66e9cead1f35cc4624b95f3ec91fbb173bfcac4adcb9a30d292e47127e33ae5c.png" },
    { name: "Whip Shot", hero: "", link: "https://workshop.codes/assets/abilities/50/whip-shot-12b9aff7dbafd5f59a714e6395e0a32bf2933e471312e077beda3d2e756e3faa.png" },
    { name: "Repair Pack", hero: "", link: "https://workshop.codes/assets/abilities/50/repair-pack-788b5e54190ac155bae0f0504cd7c0b8d1c4bf20efc948c1c80b1bb8817735fb.png" },
    { name: "Rally", hero: "", link: "https://workshop.codes/assets/abilities/50/rally-4adaa01a166f618932e61ff0a9ab271c4f635e6812b1a0292ddb551c383795cc.png" },
    { name: "Peacekeeper", hero: "", link: "https://workshop.codes/assets/abilities/50/peacekeeper-638f3f646c8b2cd1178256a4878bad4b19d30b9d12fcf40f95c215c273c0f27e.png" },
    { name: "Combat Roll", hero: "", link: "https://workshop.codes/assets/abilities/50/combat-roll-9c6739208af5199c5201db79d441569cb6d11d455021b69bdba9af7154a17531.png" },
    { name: "Magnetic Grenade", hero: "", link: "https://workshop.codes/assets/abilities/50/magnetic-grenade-d7059c68023ba821d396f02866ece63dca0967a4c285dcc95849dd356835f4db.png" },
    { name: "Deadeye", hero: "", link: "https://workshop.codes/assets/abilities/50/deadeye-81184852c16500df50d9a6749aab8abae438b70dff7314022274657a6a2adeba.png" },
    { name: "Fusion Cannons", hero: "", link: "https://workshop.codes/assets/abilities/50/fusion-cannons-550b680b8a9d60ee6931da9d9120aaa4da54ce52df04ddf39b9b0a5984909fb8.png" },
    { name: "Defense Matrix", hero: "", link: "https://workshop.codes/assets/abilities/50/defense-matrix-0ed6fd68ffded690a6804a2c63bfa43ea393dd1eaf2f91aafcf5ddcec87a2469.png" },
    { name: "Boosters", hero: "", link: "https://workshop.codes/assets/abilities/50/boosters-f2064888446d743019dc0909c4b70c5e95aa716ef6359d66383f3cdbf716a598.png" },
    { name: "Micro Missiles", hero: "", link: "https://workshop.codes/assets/abilities/50/micro-missiles-05b958ad97ea85c49e70371f48a6b8aa43d581e173b0f92697df3d120ea11136.png" },
    { name: "Self Destruct", hero: "", link: "https://workshop.codes/assets/abilities/50/self-destruct-9e57bdc7abb806c1f9be9d4de088cb271e290e355c82c7e725d1c76a58057875.png" },
    { name: "Hand Cannon", hero: "", link: "https://workshop.codes/assets/abilities/50/hand-cannon-d4dfbc04a41727a5242fbd53298a78188120f08bdd43af43ceb7aaae9545c2f7.png" },
    { name: "Rocket Punch", hero: "", link: "https://workshop.codes/assets/abilities/50/rocket-punch-cdf70df28ab5da6c31ec29233c21615f6c30904989c720ee47354d26e3a7d581.png" },
    { name: "Seismic Slam", hero: "", link: "https://workshop.codes/assets/abilities/50/seismic-slam-4f46c188eab913a139e7dc06b20374c1a88a273abdaf99dea7941ef9016c7fa6.png" },
    { name: "Power Block", hero: "", link: "https://workshop.codes/assets/abilities/50/power-block-8c90b878bf231274af397ce894348a8e8599bf0f2e5ea92343e6f69507c2e10b.png" },
    { name: "Meteor Strike", hero: "", link: "https://workshop.codes/assets/abilities/50/meteor-strike-4903ac69cb068ad50313f786f024401903d51c82745c22936922d442adbc8883.png" },
    { name: "Tri Shot", hero: "", link: "https://workshop.codes/assets/abilities/50/tri-shot-64dd68bc20e948a56ae165a3006d63e99704bed3bbb603416e5c9da0ee1d4f7f.png" },
    { name: "Sticky Bombs", hero: "", link: "https://workshop.codes/assets/abilities/50/sticky-bombs-b1c8a45ea58cfe78cab619ee9c5854070ff73e06e742ff43b2f899151d78d91e.png" },
    { name: "Flight", hero: "", link: "https://workshop.codes/assets/abilities/50/flight-bb1066e067c7e230b4b94da68e46aac9848bf9b433d2abab67569d45ed51cb6e.png" },
    { name: "Focusing Beam", hero: "", link: "https://workshop.codes/assets/abilities/50/focusing-beam-9d42b381af2e16528aef5199fbbc5349f7131b2191b9e8818def8d9668495165.png" },
    { name: "Duplicate", hero: "", link: "https://workshop.codes/assets/abilities/50/duplicate-e0aa5c87fcdeeb3d543b3121ffcf999662040a65aa6c33554d187944f6148726.png" },
    { name: "Glide", hero: "", link: "https://workshop.codes/assets/abilities/50/glide-eece9fb1cc49612743fdde6e4964175a7862963765226a8935c5fdb634e61392.png" },
    { name: "Shuriken", hero: "", link: "https://workshop.codes/assets/abilities/50/shuriken-7408757c91cc910c59c485faedbbfbb56d19f76a4616854a576114dac47a9207.png" },
    { name: "Swift Strike", hero: "", link: "https://workshop.codes/assets/abilities/50/swift-strike-c8b6cd64b53802dcd16b75f11af8f6827cd3b009ac8f83bd4ac5fbcb8de9ea45.png" },
    { name: "Deflect", hero: "", link: "https://workshop.codes/assets/abilities/50/deflect-734ae8791489ce2ebf073504f0539e961beda0f0dea174b081142fbc6829ae81.png" },
    { name: "Dragonblade", hero: "", link: "https://workshop.codes/assets/abilities/50/dragonblade-54b0ba367eb1ba0f05774682a3cd9dcce59b1a9f881b7720c85adb3546195281.png" },
    { name: "Cyber Agility", hero: "", link: "https://workshop.codes/assets/abilities/50/cyber-agility-86a70164016dbaf89aa8a3fdc1aaffbf31a2edd9b1b50f30d69ab3200966ea4e.png" },
    { name: "Storm Bow", hero: "", link: "https://workshop.codes/assets/abilities/50/storm-bow-c7d974b74a7caebe9747e3936bda87d911cd1e03d40c9bc2de1482aa523bed63.png" },
    { name: "Sonic Arrow", hero: "", link: "https://workshop.codes/assets/abilities/50/sonic-arrow-1f8d8b57b38c575b4e5c4d5bf17681094206adaf6ad0b78d369be2547d320c48.png" },
    { name: "Storm Arrows", hero: "", link: "https://workshop.codes/assets/abilities/50/storm-arrows-f95f020dc56bc9c2bde819662d7c6c8664e5000a075ac41050a7613c4d059b21.png" },
    { name: "Dragonstrike", hero: "", link: "https://workshop.codes/assets/abilities/50/dragonstrike-6e4e18df91f80dd45e3e43083d011f023dd6e512e32b7e2d32ab09751589e22c.png" },
    { name: "Wall Climb", hero: "", link: "https://workshop.codes/assets/abilities/50/wall-climb-8b632af7ca8f4871c3b0492ef92648b54a51e9e86d16a1da9af3295cce98700d.png" },
    { name: "Solar Rifle", hero: "", link: "https://workshop.codes/assets/abilities/50/solar-rifle-a0b4ed7013cfc13874aa4eb113ab207b3fbcfe817f30fa33a9011373d4085ff4.png" },
    { name: "Outburst", hero: "", link: "https://workshop.codes/assets/abilities/50/outburst-4692b1f132230afcad78999b941d914ead2b749381f50683a1108560ebae022d.png" },
    { name: "Healing Pylon", hero: "", link: "https://workshop.codes/assets/abilities/50/healing-pylon-4db820c8cd417e4a634383e5c96af9cb49647ebc730b10a02daf62a645acd0dd.png" },
    { name: "Captive Sun", hero: "", link: "https://workshop.codes/assets/abilities/50/captive-sun-b2b4882bfaea66d63d2a9cf22360fd699c5ea1661292080b93c38ced8a470f21.png" },
    { name: "Scattergun", hero: "", link: "https://workshop.codes/assets/abilities/50/scattergun-a826570b0f4fc7520fa019129268dd82e0e64661de16a2cf5b7660b771897123.png" },
    { name: "Jagged Blade", hero: "", link: "https://workshop.codes/assets/abilities/50/jagged-blade-d5af66f8bb59be89015ba13bac90c9a1ab99b8ee656bd53f9db450109f38929d.png" },
    { name: "Commanding Shout", hero: "", link: "https://workshop.codes/assets/abilities/50/commanding-shout-8bfea5d59d62cbde0bd131a788c79208e81e506cebc7bf558c6a72e6fad3ef8b.png" },
    { name: "Carnage", hero: "", link: "https://workshop.codes/assets/abilities/50/carnage-143c811ac47f05b47ea76df27dbf518bceb8ac80aed7586db6f88a10c8274d54.png" },
    { name: "Rampage", hero: "", link: "https://workshop.codes/assets/abilities/50/rampage-7f000e507557af3591ebc1a0d7748927446ff97847a4e97dbed8ec3f474ee5bd.png" },
    { name: "Frag Launcher", hero: "", link: "https://workshop.codes/assets/abilities/50/frag-launcher-3d1f069a4e7e35d7cefeeb5e11927488b5572b434e4c5052d36d12f9f7dce957.png" },
    { name: "Steel Trap", hero: "", link: "https://workshop.codes/assets/abilities/50/steel-trap-e5425d473b02cd5da49cc65e06882ae53bff767eb5fd24bd9e58f9a7d058d2bc.png" },
    { name: "Concussion Mine", hero: "", link: "https://workshop.codes/assets/abilities/50/concussion-mine-0f0d9ff42302d597df7477393ca0532df39cee0e3a9e5ad674b97782cdecf541.png" },
    { name: "Rip Tire", hero: "", link: "https://workshop.codes/assets/abilities/50/rip-tire-311f47afc99ce412c09e9d9c8e54b7543285d8b0de6ab2c678a81858f5767653.png" },
    { name: "Healing Ofuda", hero: "", link: "https://workshop.codes/assets/abilities/50/healing-ofuda-f7c8c10997590a5a68543655372c7da3d25894aca1b4208490371892df159d09.png" },
    { name: "Kunai", hero: "", link: "https://workshop.codes/assets/abilities/50/kunai-07ac9366996fae046ca5c580bb4bff79db8b06ecf0a3f48e2447881aa7dcdbd0.png" },
    { name: "Swift Step", hero: "", link: "https://workshop.codes/assets/abilities/50/swift-step-a9c6cbad3fd9a454dcd1ecac8ccc4d8469b54ac452a58ed1c168a9b3b0a34717.png" },
    { name: "Protection Suzu", hero: "", link: "https://workshop.codes/assets/abilities/50/protection-suzu-cc99e3f308d826cba6e44ca4547a53ce78647bde09074ec84edb80f65ed3d9d0.png" },
    { name: "Kitsune Rush", hero: "", link: "https://workshop.codes/assets/abilities/50/kitsune-rush-8c559f9d28375123ed1eefef1651cbec6fccbf6bc8d6edb47c801ce22aa23199.png" },
    { name: "Wall Climb", hero: "", link: "https://workshop.codes/assets/abilities/50/wall-climb-8b632af7ca8f4871c3b0492ef92648b54a51e9e86d16a1da9af3295cce98700d.png" },
    { name: "Healing Blossom", hero: "", link: "https://workshop.codes/assets/abilities/50/healing-blossom-d4d66b0ca9ed593438740e47a3d5178232c735907586fccf7c863e86e8d191ac.png" },
    { name: "Life Grip", hero: "", link: "https://workshop.codes/assets/abilities/50/life-grip-bc46a6d10d4104a7281bd37c09c0c88b7887c036e4109a21e5ba9ec681abce5b.png" },
    { name: "Thorn Volley", hero: "", link: "https://workshop.codes/assets/abilities/50/thorn-volley-3ffc5c0d860b78952374d03d18aa6a99c69c6a8064cb6f52966c28e679ef00fb.png" },
    { name: "Petal Platform", hero: "", link: "https://workshop.codes/assets/abilities/50/petal-platform-9d4b9876d6c8a0c49ae3198545d91834face56e3c64a415cd330b771d3ec67d8.png" },
    { name: "Tree Of Life", hero: "", link: "https://workshop.codes/assets/abilities/50/tree-of-life-ca3eb6a57709b0fdb9bd7552255cda90da8054dbf321720337bb395a53b1e398.png" },
    { name: "Rejuvenating Dash", hero: "", link: "https://workshop.codes/assets/abilities/50/rejuvenating-dash-baceeaf85037ad9798e25639c76547dd2675f4ff5e33fc10f6eff7587fbf0cc5.png" },
    { name: "Sonic Amplifier", hero: "", link: "https://workshop.codes/assets/abilities/50/sonic-amplifier-6e417914687b72c5dc47934e4fac6d50b7148668a2de8e83445671520cd66508.png" },
    { name: "Soundwave", hero: "", link: "https://workshop.codes/assets/abilities/50/soundwave-4bb55c5a7a36b10f7bd7601277aa8ef2eb01b2c446bf6a00707f35da1191a19a.png" },
    { name: "Crossfade", hero: "", link: "https://workshop.codes/assets/abilities/50/crossfade-5d16e6eac80d618b0a13e43f152e90830b3b58165688d65b622504c55321bb94.png" },
    { name: "Amp It Up", hero: "", link: "https://workshop.codes/assets/abilities/50/amp-it-up-7b8f7601c3cafb27764439252dffffe884d237b77f34c9e2b633d9e5fdf784f4.png" },
    { name: "Sound Barrier", hero: "", link: "https://workshop.codes/assets/abilities/50/sound-barrier-e8d73565cc21a9e60ec094036be44ef856018e340b0aacfdb87109aa32fcedfe.png" },
    { name: "Wall Ride", hero: "", link: "https://workshop.codes/assets/abilities/50/wall-ride-c2639dee6da46e9fc65b6593e2de8601752fe8ff3538d61e4f911c5a4c41a515.png" },
    { name: "Incendiary Chaingun", hero: "", link: "https://workshop.codes/assets/abilities/50/incendiary-chaingun-2dbdc40a2cd3fa6024662f363cf86c5416bfcaba74c8145d732a6728422e19e8.png" },
    { name: "Volatile Chaingun", hero: "", link: "https://workshop.codes/assets/abilities/50/volatile-chaingun-b463cb7da3b65631d07169fe2b76c73459428f659aaa3e2d072d718de91ec68f.png" },
    { name: "Overrun", hero: "", link: "https://workshop.codes/assets/abilities/50/overrun-cb5b97b1dd8f0a11bb050f8cf9847b4c43e05b11605e9f4d159d5a95b641b67d.png" },
    { name: "Cardiac Overdrive", hero: "", link: "https://workshop.codes/assets/abilities/50/cardiac-overdrive-451100406ff16c9aee52337ab0e14fd3c2e8a4d114d6e4417f63ce7e5652d5c6.png" },
    { name: "Cage Fight", hero: "", link: "https://workshop.codes/assets/abilities/50/cage-fight-07d56dd4234e8adad05bebda5973ac87ca87f79de8df8c6d1507bfbe35880d50.png" },
    { name: "Endothermic Blaster", hero: "", link: "https://workshop.codes/assets/abilities/50/endothermic-blaster-edc11c4f612e8d75bf23c7ff2fe75bc7d9b80a069fb9852ae00d773b1198a3ef.png" },
    { name: "Cryo Freeze", hero: "", link: "https://workshop.codes/assets/abilities/50/cryo-freeze-93f012c61f9b6f2c9624eb781845a3f8a25985ea805056f574186c2b9686b6eb.png" },
    { name: "Ice Wall", hero: "", link: "https://workshop.codes/assets/abilities/50/ice-wall-cd67f42d5778b3383a0e3138d103db97e9d44c1e638ed651b582a04d5f04763d.png" },
    { name: "Blizzard", hero: "", link: "https://workshop.codes/assets/abilities/50/blizzard-afd3b611a24cd063dd776adc6c70e0f10d16774f08bedd8e4e6bb470fc194a46.png" },
    { name: "Caduceus Staff", hero: "", link: "https://workshop.codes/assets/abilities/50/caduceus-staff-15a8637a43545dd56499adb73219a146e0debdc0f85d2a3b210333f51f9a9fad.png" },
    { name: "Guardian Angel", hero: "", link: "https://workshop.codes/assets/abilities/50/guardian-angel-abd887839bb9315af13b39dacd1b2b2b607bc45bf23ddd428e9e93602d7c25b1.png" },
    { name: "Resurrect", hero: "", link: "https://workshop.codes/assets/abilities/50/resurrect-ad162b91241dbf5a07ce8eb973a6046fbe14d78e2d30469c19327579a64ca2cb.png" },
    { name: "Valkyrie", hero: "", link: "https://workshop.codes/assets/abilities/50/valkyrie-13fa47c1df7a5bed3ec44182fd221e23fd771b2168a8c969b630996276dd5f37.png" },
    { name: "Angelic Descent", hero: "", link: "https://workshop.codes/assets/abilities/50/angelic-descent-59a1c60873ceabf686822dcaff7d61f33a0f9a6a339512f5314538e5c1d87392.png" },
    { name: "Biotic Grasp", hero: "", link: "https://workshop.codes/assets/abilities/50/biotic-grasp-6deda71f5945168975647c6b24cdb6b5bbd459088655b0e9521f625d4fc51298.png" },
    { name: "Biotic Grasp Alt Fire", hero: "", link: "https://workshop.codes/assets/abilities/50/biotic-grasp-alt-fire-d0fd55dd8bbd7e0bc5d4c4109594512b09f6ade79f7313ed2c86e2664955a326.png" },
    { name: "Fade", hero: "", link: "https://workshop.codes/assets/abilities/50/fade-a1fcc50189c5734b1ce498442ab99e8d1d4ad4787294cb5d2e73fa273e890930.png" },
    { name: "Biotic Orb", hero: "", link: "https://workshop.codes/assets/abilities/50/biotic-orb-e3b5a8b461ba95ba9022a7bde45aea66ad536b37ca7eaf737443a81670ba7a4e.png" },
    { name: "Coalescence", hero: "", link: "https://workshop.codes/assets/abilities/50/coalescence-b2cdecbc490c441c787bc3f35af16d28ef2fced31924b83b52a9b28dbfe97ec5.png" },
    { name: "Augmented Fusion Driver", hero: "", link: "https://workshop.codes/assets/abilities/50/augmented-fusion-driver-98c75e87ab70bb49098cec7430effdb7cb8da23477c9eae0ded1fa29c7852aa0.png" },
    { name: "Energy Javelin", hero: "", link: "https://workshop.codes/assets/abilities/50/energy-javelin-340bd658079d4cbad37cef42a0bea4782f577c728cf3a3b41cde139f003980db.png" },
    { name: "Fortify", hero: "", link: "https://workshop.codes/assets/abilities/50/fortify-d5d3bb5d0f1dc6239c3f04497fd64b159c6fd8692eb419124e54b8dab6679d80.png" },
    { name: "Javelin Spin", hero: "", link: "https://workshop.codes/assets/abilities/50/javelin-spin-e5cf0a48d249966d4dbf8633d61efceb2edd20d12092b825c9acca8fbf0f48a7.png" },
    { name: "Terra Surge", hero: "", link: "https://workshop.codes/assets/abilities/50/terra-surge-544ff875ee3db58faac8b9bf88a2f5b28decb3987a2f177360d25ad17dd6bb2f.png" },
    { name: "Rocket Launcher", hero: "", link: "https://workshop.codes/assets/abilities/50/rocket-launcher-a7b3c728bc7a1793ba41d3ff0d50a71905cb3b76f7fbcaf02bf06efe7667ce55.png" },
    { name: "Jump Jet", hero: "", link: "https://workshop.codes/assets/abilities/50/jump-jet-51077dc99736f69c348d93add9063ac44b14a7e5bccd0ee07fff771e9608d607.png" },
    { name: "Concussive Blast", hero: "", link: "https://workshop.codes/assets/abilities/50/concussive-blast-6dd77449899907b0100fb60b48a1713bc48c26eac9ad2805c72e737360cd2830.png" },
    { name: "Barrage", hero: "", link: "https://workshop.codes/assets/abilities/50/barrage-c9ddfe164e2b82ad730a4e2f0184beeb1e7590e80ce6734af4f036c0ff8528e5.png" },
    { name: "Hover Jets", hero: "", link: "https://workshop.codes/assets/abilities/50/hover-jets-c2639dee6da46e9fc65b6593e2de8601752fe8ff3538d61e4f911c5a4c41a515.png" },
    { name: "Hellfire Shotguns", hero: "", link: "https://workshop.codes/assets/abilities/50/hellfire-shotguns-51ee6be00baa22260928797d75a94c654f8e3e9cb0ec90687fb71c86c7d8ee41.png" },
    { name: "Wraith Form", hero: "", link: "https://workshop.codes/assets/abilities/50/wraith-form-1909679bd9bb41c648f7f9af789d26e78d7e914ba4276f92a41036a7b91b7e2c.png" },
    { name: "Shadow Step", hero: "", link: "https://workshop.codes/assets/abilities/50/shadow-step-4316c5626ef188d5cb92cad489f591f75c48e951e346c1ac15f2cdb338ffbf84.png" },
    { name: "Death Blossom", hero: "", link: "https://workshop.codes/assets/abilities/50/death-blossom-ef6acae230eb0565442957796e70d1cb35412822846a9150b8b137a8ebbf8253.png" },
    { name: "Void Accelerator Omnic Form", hero: "", link: "https://workshop.codes/assets/abilities/50/void-accelerator-omnic-form-439b937f89944172e3ac72e0b96a5ce35b5231aa3c73f2bd0621719badae41f9.png" },
    { name: "Void Barrier Omnic Form", hero: "", link: "https://workshop.codes/assets/abilities/50/void-barrier-omnic-form-dfd51d7f7ae8a08f0472187e4ada682df819a647ab2549574b52caa114d01ec0.png" },
    { name: "Nemesis Form", hero: "", link: "https://workshop.codes/assets/abilities/50/nemesis-form-b9195a33bb29a63a39d73f543eaa673ba7d88db01fd35d9790192263f6e1d8ca.png" },
    { name: "Ravenous Vortex", hero: "", link: "https://workshop.codes/assets/abilities/50/ravenous-vortex-e0d7f28a75b016cedc8b678424c1244f6df6df703a2f354fcc87f466d00a9252.png" },
    { name: "Annihilation", hero: "", link: "https://workshop.codes/assets/abilities/50/annihilation-52b75335500979ee3b9a2fe64a4d7ebb9f3d5f10d1e311171852d86f3fdcf75b.png" },
    { name: "Rocket Hammer", hero: "", link: "https://workshop.codes/assets/abilities/50/rocket-hammer-80132e3daf25e1148ad5f3df90c3b285c3e490bf4284c34c039a60170612fbfa.png" },
    { name: "Barrier Field", hero: "", link: "https://workshop.codes/assets/abilities/50/barrier-field-cf94c33131e8b3eda4ae5e6da05ad8e812763682f78e70bd8154acf630e83313.png" },
    { name: "Charge", hero: "", link: "https://workshop.codes/assets/abilities/50/charge-ed3f955ba17398afc4cf5de19e86b86cff83f198ecf4064271ae76f11e30e105.png" },
    { name: "Fire Strike", hero: "", link: "https://workshop.codes/assets/abilities/50/fire-strike-2ff7e8dd1a9b3508af963efa28f77610d6fcd7da4652fb7cf0212bf92067520b.png" },
    { name: "Earthshatter", hero: "", link: "https://workshop.codes/assets/abilities/50/earthshatter-b697139f1b8f98497c0db515bdc7538b36d3ee9cdba4b465c4aaae3fdac167ef.png" },
    { name: "Scrap Gun", hero: "", link: "https://workshop.codes/assets/abilities/50/scrap-gun-b33559a5a215e1b6420959e06d314b4ef51a366bef33944f2b7c6e9cc8cfd741.png" },
    { name: "Take A Breather", hero: "", link: "https://workshop.codes/assets/abilities/50/take-a-breather-cf42c7334a28022e95baa6fdae13dd4bcfcbb9e5b4b2e8b409b0897d12cfc092.png" },
    { name: "Chain Hook", hero: "", link: "https://workshop.codes/assets/abilities/50/chain-hook-a6bf6b1dc53d1ed33744ca0234e7e1b714a06e5ba6668dfda4b213770b9b8fd9.png" },
    { name: "Pig Pen", hero: "", link: "https://workshop.codes/assets/abilities/50/pig-pen-20edc27a5f69a69b4e29d0b4d79bf3efff6e9a51c354fe4f42c2b89d75bc3cde.png" },
    { name: "Whole Hog", hero: "", link: "https://workshop.codes/assets/abilities/50/whole-hog-37e61ac8ee95884719296e74c79ee7c29e830d9c3d37d6b02e6c55a66b8953ab.png" },
    { name: "Hyperspheres", hero: "", link: "https://workshop.codes/assets/abilities/50/hyperspheres-774a3297ea5fb843c9787ae4aa53b1b960162a7151635e67d554654e3387fa94.png" },
    { name: "Experimental Barrier", hero: "", link: "https://workshop.codes/assets/abilities/50/experimental-barrier-bd3c1bb82a2daca22f00c4550559bada2ef2dabf38bf9a62607068686b56b011.png" },
    { name: "Kinetic Grasp", hero: "", link: "https://workshop.codes/assets/abilities/50/kinetic-grasp-02a2d41c1bafb441482ee526849544461ab21b17752e8d9cb4857a2f3d8aa89a.png" },
    { name: "Accretion", hero: "", link: "https://workshop.codes/assets/abilities/50/accretion-07d6812fd3836ef407b8ccd0f1b1ceb4570e215b097d911cc511605734242d7f.png" },
    { name: "Gravitic Flux", hero: "", link: "https://workshop.codes/assets/abilities/50/gravitic-flux-d61b545bae4cf8810721afe438fae49251653fb0225a4bb815392c0998ae49d2.png" },
    { name: "Railgun", hero: "", link: "https://workshop.codes/assets/abilities/50/railgun-3247c16ed07e0b1a62775c27e6be8c034af207152e89f76058e8713f10838ad7.png" },
    { name: "Railgun Alt Fire", hero: "", link: "https://workshop.codes/assets/abilities/50/railgun-alt-fire-8dc86c64423ae0787b0a81e45bfae64c9e8c219f4e23b52e2d68fd404b8cd418.png" },
    { name: "Power Slide", hero: "", link: "https://workshop.codes/assets/abilities/50/power-slide-bb25f40137c966ce0ef04e8058cb86dfe66639bd4b69b87802ac8a36035a6167.png" },
    { name: "Disruptor Shot", hero: "", link: "https://workshop.codes/assets/abilities/50/disruptor-shot-c73263c4d2ec7703e476d35b5cb71661cb5b0088b5b982f0aba4f5b73298046e.png" },
    { name: "Overclock", hero: "", link: "https://workshop.codes/assets/abilities/50/overclock-b62caf5b7b2344d6593c40b0f408824d54f2014e96db8e3aef571e2ef2351312.png" },
    { name: "Heavy Pulse Rifle", hero: "", link: "https://workshop.codes/assets/abilities/50/heavy-pulse-rifle-9eeed947fad83fc6bc5861b14d123574c3e47dd9946959dbe10e2dfeb82ba7c6.png" },
    { name: "Helix Rockets", hero: "", link: "https://workshop.codes/assets/abilities/50/helix-rockets-a595d2b1a73e55de882435deab60c803a0499098146c4134b9ca3ab05652d8ed.png" },
    { name: "Sprint", hero: "", link: "https://workshop.codes/assets/abilities/50/sprint-1160f957ad40a3a5b1f633b81d5c66139eb0e9e27feec5ff55e865b0085afa90.png" },
    { name: "Biotic Field", hero: "", link: "https://workshop.codes/assets/abilities/50/biotic-field-a16e6f8029d0c1f11bd5625293894e997315b0e542f3d33430f298547d7cef5d.png" },
    { name: "Tactical Visor", hero: "", link: "https://workshop.codes/assets/abilities/50/tactical-visor-4e6fba4ed2e136cf9e050158a6167858d42671c1090af5b74f56f3431df4ca26.png" },
    { name: "Machine Pistol", hero: "", link: "https://workshop.codes/assets/abilities/50/machine-pistol-306b174dd1a894e492cd3a228788e5f1d6d4350a3a6876ed9aa74d4fa6c7024d.png" },
    { name: "Hack", hero: "", link: "https://workshop.codes/assets/abilities/50/hack-280d74475acb2db8f0d3787ec791aa7e79006e365dc66db812cab16c2a8c5a67.png" },
    { name: "Virus", hero: "", link: "https://workshop.codes/assets/abilities/50/virus-f6a99d4987d49d3873946efcfa05cc106df523dc357ecb19de59f2fbe87df32d.png" },
    { name: "Translocator", hero: "", link: "https://workshop.codes/assets/abilities/50/translocator-e671edaa33ee61b2b354ac74d9fd5153717803b17e2acee953dc1fcf09a18b57.png" },
    { name: "Emp", hero: "", link: "https://workshop.codes/assets/abilities/50/emp-193fea523908a412f201f2ed8ce607384b1b029b83e4cbc1fe167e3e8327194c.png" },
    { name: "Photon Projector", hero: "", link: "https://workshop.codes/assets/abilities/50/photon-projector-5324c24b3e48ae870cfe6fb8600601fef782258a48cbbf9a2ab95eb1ae8375f4.png" },
    { name: "Sentry Turret", hero: "", link: "https://workshop.codes/assets/abilities/50/sentry-turret-05c7caf3e78b0f1c27424cc800869ff2f9a59e9dcc4f2a65a883c845c84e6c4e.png" },
    { name: "Teleporter", hero: "", link: "https://workshop.codes/assets/abilities/50/teleporter-b589ecd3c1e5ce230668f0811842d172c762a4b69cc04c42a8af41949f621daa.png" },
    { name: "Photon Barrier", hero: "", link: "https://workshop.codes/assets/abilities/50/photon-barrier-f112516a4182eb05150ebfce0c9aac355e9fc4cd8f7796768e171226121594ec.png" },
    { name: "Rivet Gun", hero: "", link: "https://workshop.codes/assets/abilities/50/rivet-gun-23cc2b6ee684457b2916388e647ed1918efbcd911dd9062e55bbf3baddd774e0.png" },
    { name: "Deploy Turret", hero: "", link: "https://workshop.codes/assets/abilities/50/deploy-turret-9ac26dd61f2dd41b71a63335be533db90e3f0f6c67c24b3123d40041797f30c4.png" },
    { name: "Overload", hero: "", link: "https://workshop.codes/assets/abilities/50/overload-b1381e5db09d058f0d762ab3de034783c92d4f0f75b6bad98ccc8709f5423d03.png" },
    { name: "Molten Core", hero: "", link: "https://workshop.codes/assets/abilities/50/molten-core-d2c0f5cf1c469c6310d4610bf86c816d8cc83668c0323617ead478e1a4d11e85.png" },
    { name: "Pulse Pistols", hero: "", link: "https://workshop.codes/assets/abilities/50/pulse-pistols-05403617744ab25e6fb260c2c18f6a08a2452853591267c2776f095b6813ae40.png" },
    { name: "Blink", hero: "", link: "https://workshop.codes/assets/abilities/50/blink-d0a7c9ef60a8ed572443a7003816e531dac0c34d3d7997b093d92d14c5e01fbd.png" },
    { name: "Recall", hero: "", link: "https://workshop.codes/assets/abilities/50/recall-c9aceb66f4a5efa8bc8d8b7d9b969c599086e52be0baa88a9f2918b6d07862f4.png" },
    { name: "Pulse Bomb", hero: "", link: "https://workshop.codes/assets/abilities/50/pulse-bomb-bd54d23f7e0754bd876b22acda57ab2f16b16be2f6ad8ff761d163f9fbef2db9.png" },
    { name: "Widows Kiss", hero: "", link: "https://workshop.codes/assets/abilities/50/widows-kiss-9016ab83c46c24b47ae1030a3946b6f0480e16550483fccc61f4085d1a649b23.png" },
    { name: "Grappling Hook", hero: "", link: "https://workshop.codes/assets/abilities/50/grappling-hook-442f696968651cc02347dca835e3fc0ad69d9f9a73998d41a3987cee629c12c9.png" },
    { name: "Venom Mine", hero: "", link: "https://workshop.codes/assets/abilities/50/venom-mine-dad4f6728aac0529ae316b13a3dd050088f497b9a947a6440edbf564280d5057.png" },
    { name: "Infra Sight", hero: "", link: "https://workshop.codes/assets/abilities/50/infra-sight-8a80c5f759f799d6cf9e1e3c43997c74dfe51d98ff075c6750e8fcc1718e0a10.png" },
    { name: "Tesla Cannon", hero: "", link: "https://workshop.codes/assets/abilities/50/tesla-cannon-5eaf761e74326aedd2ea02b486a91a21ce6d6ef5a6ef742f908037ff1cb3d1e4.png" },
    { name: "Jump Pack", hero: "", link: "https://workshop.codes/assets/abilities/50/jump-pack-bcc092beec21b957e94b11ce32570fb1866861ba1c10fc80d69ca21071622ff2.png" },
    { name: "Barrier Projector", hero: "", link: "https://workshop.codes/assets/abilities/50/barrier-projector-5c0dd4d25faaae134e8af411d3480a38099a5960b4541f01db0b2770c3d8eded.png" },
    { name: "Primal Rage", hero: "", link: "https://workshop.codes/assets/abilities/50/primal-rage-2829fa142d8c59594e686f607af6a517d65de81bfd303de811b2a5d82ef1b4bc.png" },
    { name: "Quad Cannons", hero: "", link: "https://workshop.codes/assets/abilities/50/quad-cannons-0dc70ca96c6a4f650f49a22c87db027ff1e5af1a146b7b00ebb140ce9340d826.png" },
    { name: "Grappling Claw", hero: "", link: "https://workshop.codes/assets/abilities/50/grappling-claw-bc90129fdb9621dd4249c3abb2b28f2db2f56ff60fd38c2eedc3c610fc52280e.png" },
    { name: "Roll", hero: "", link: "https://workshop.codes/assets/abilities/50/roll-ddd1c736791ea7a9d364fd970d4332fd69a64bca0cdfe7bfeb88fc7a25b148b6.png" },
    { name: "Adaptive Shield", hero: "", link: "https://workshop.codes/assets/abilities/50/adaptive-shield-4340a37e4f7518355a36a3062f2d81d7213612e3ae46adaa52f781f2a1e365d4.png" },
    { name: "Minefield", hero: "", link: "https://workshop.codes/assets/abilities/50/minefield-2ce40a31843f7cae25cccc90c1b94722d10d19a2fa9380f52c5c74f4d7229dd7.png" },
    { name: "Piledriver", hero: "", link: "https://workshop.codes/assets/abilities/50/piledriver-b7b7bb89422f31afa30aaf0a5d3a0fe3b67b903299389c1389b268b9e0197cc7.png" },
    { name: "Particle Cannon", hero: "", link: "https://workshop.codes/assets/abilities/50/particle-cannon-50d14e9f2c3a21a4b1c75c3ac7d4f2b6b96d1891b529c86c6b471c717bd3a6b3.png" },
    { name: "Particle Barrier", hero: "", link: "https://workshop.codes/assets/abilities/50/particle-barrier-8abb8fb37484ebe4cc838c8cd2eec3f9c6678a49988df7b9ff2fa9fdb8d69604.png" },
    { name: "Projected Barrier", hero: "", link: "https://workshop.codes/assets/abilities/50/projected-barrier-5fff36533340d76cfde1f952cb2ef683ab678469436896ef2ee5d7db8def3fe2.png" },
    { name: "Graviton Surge", hero: "", link: "https://workshop.codes/assets/abilities/50/graviton-surge-ae61df2baf6266144e871fadf7d379e6559196e893a22409b8335f41daeaf72f.png" },
    { name: "Orb Of Destruction", hero: "", link: "https://workshop.codes/assets/abilities/50/orb-of-destruction-a23990bbb7c851fb0befb19d25c4425c7618c4cca8ad2f76880aa7f01e454692.png" },
    { name: "Orb Of Discord", hero: "", link: "https://workshop.codes/assets/abilities/50/orb-of-discord-c8a26b34814090bb046016bcea88490927da9c775b820ed68c5f61a0c1522a29.png" },
    { name: "Transcendence", hero: "", link: "https://workshop.codes/assets/abilities/50/transcendence-9b2c2d7b2dcdb9a4bed5f4d29a2ebabec398fa6dbc2a2b3729425d126b9a6c5e.png" }
]




//    {name: "", hero: "", link: ""},

let buttonContainer = document.querySelector(".button-container");
let iconImage = document.querySelector(".icon-img");
let counter = document.querySelector(".counter");

let numOptions = 10;
let numCounter = 0;

runNewQuestion(iconArr, numOptions);

function runNewQuestion(iconArr, count)
{
    resetQuestion();
    let indexArr = generateRandomIndexes(iconArr, count);
    generateOptions(iconArr, indexArr);
}

function generateRandomIndexes(iconArr, count)
{
    let indexArr = new Array(count);
    let existsAlready;
    for (let i = 0; i < indexArr.length; i++)
    {
        do
        {
            existsAlready = false;
            indexArr[i] = Math.floor(Math.random() * iconArr.length);
            for (let j = 0; j < i; j++)
            {
                if (indexArr[i] === indexArr[j])
                {
                    existsAlready = true;
                    break;
                }
            }
        } while (existsAlready)
    }
    return indexArr;
}

function generateOptions(iconArr, indexArr)
{
    let optionButtons = new Array(indexArr.length);
    let rightAnswer = Math.floor(Math.random() * indexArr.length);

    // Generate image
    iconImage.src = iconArr[indexArr[rightAnswer]].link;

    // Generate buttons
    for (let i = 0; i < indexArr.length; i++)
    {
        optionButtons[i] = createOptionButton(iconArr[indexArr[i]]);
    }
    optionButtons[rightAnswer].setAttribute("answer", "yes");
}

function createOptionButton(icon)
{
    let optionButton = document.createElement("button");
    buttonContainer.appendChild(optionButton);
    optionButton.textContent = icon.name;
    optionButton.classList.add("option-button");
    optionButton.addEventListener("click", function () {
        let allOptionButtons = optionButton.parentElement.children;
        optionButton.style.background = "red";
        for (let i = 0; i < allOptionButtons.length; i++)
        {
            allOptionButtons[i].disabled = true;
            if (allOptionButtons[i].getAttribute("answer") === "yes")
            {
                allOptionButtons[i].style.background = "green";
                if (allOptionButtons[i] === optionButton)
                {
                    numCounter++;
                    counter.textContent = "Count: " + numCounter;
                }
                else
                {
                    numCounter = 0;
                    counter.textContent = "Count: " + numCounter;
                }
            }
        }

        setTimeout(function () {
            runNewQuestion(iconArr, numOptions);
        }, 1500);
    })
    return optionButton;
}

function resetQuestion()
{
    buttonContainer.textContent = "";
}
