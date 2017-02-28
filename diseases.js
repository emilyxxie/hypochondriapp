var diseases = {
    "Oguchi disease": {
        "summary": "Oguchi disease, also called congenital stationary night blindness, Oguchi type 1 or Oguchi disease 1, is an autosomal recessive form of congenital stationary night blindness associated with fundus discoloration and abnormally slow dark adaptation.",
        "symptoms": ["red eye", "diplopia", "edema", "phobia", "blindness", "inflammation", "nystagmus", "exophthalmos", "ptosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Oguchi_disease"
    },
    "Adenosine monophosphate deaminase deficiency type 1": {
        "summary": "Adenosine monophosphate deaminase deficiency type 1, also called myoadenylate deaminase deficiency (MADD), is a recessive genetic metabolic disorder that affects approximately 1\u20132% of populations of European descent. It appears to be considerably rarer in Asian populations. The genetic form is caused by a defect in the gene for AMP deaminase though there is also an acquired form of AMP deficiency.",
        "symptoms": ["boil", "weakness", "palpitation", "inflammation", "irritation", "hyperthermia", "muscle cramp", "muscle weakness", "fatigue", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Adenosine_monophosphate_deaminase_deficiency_type_1"
    },
    "Restrictive dermopathy": {
        "summary": "Restrictive dermopathy is a rare, lethal autosomal recessive skin condition characterized by abnormal faces, tight skin, sparse or absent eyelashes, and secondary joint changes.:563",
        "symptoms": ["ataxia"],
        "url": "https://en.wikipedia.org/wiki/Restrictive_dermopathy"
    },
    "Lhermitte\u2013Duclos disease": {
        "summary": "Lhermitte\u2013Duclos disease (LDD) (English /\u02ccl\u025b\u0259r\u02c8mi\u02d0t\u02ccdu\u02d0\u02c8klo\u028a/), also called dysplastic gangliocytoma of the cerebellum, is a rare, slowly growing tumor of the cerebellum, a gangliocytoma sometimes considered to be a hamartoma, characterized by diffuse hypertrophy of the granular layer of the cerebellum. It is often associated with Cowden syndrome. It was described by Jacques Jean Lhermitte and P. Duclos in 1920.",
        "symptoms": ["diplopia", "visual disturbances", "headache", "tremor", "ataxia", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Lhermitte%E2%80%93Duclos_disease"
    },
    "Raine syndrome": {
        "summary": "Raine syndrome (RNS), also called osteosclerotic bone dysplasia, is a rare autosomal recessive congenital disorder characterized by craniofacial anomalies including microcephaly, noticeably low set ears, osteosclerosis, a cleft palate, gum hyperplasia, a hypoplastic nose, and eye proptosis. It is considered to be a lethal disease, and usually leads to death within a few hours of birth. However, a recent report describes two studies in which children with Raine Syndrome have lived to 8 and 11 years old, so it is currently proposed that there is a milder expression that the phenotype can take (Simpson 2009).",
        "symptoms": ["exophthalmos", "ptosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Raine_syndrome"
    },
    "Idiopathic granulomatous hepatitis": {
        "summary": "Idiopathic granulomatous hepatitis is a rare medical condition characterised by granulomas in the liver, recurrent fever, myalgia, and fatigue. The condition is not a true hepatitis, and some experts believe it is a variant of sarcoidosis.",
        "symptoms": ["myalgia", "fever", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Idiopathic_granulomatous_hepatitis"
    },
    "MERRF syndrome": {
        "summary": "MERRF syndrome (or myoclonic epilepsy with ragged red fibers) is a mitochondrial disease. It is extremely rare, with an estimated prevalence of 1/400,000 in Northern Europe, and has varying degrees of expressivity owing to heteroplasmy.",
        "symptoms": ["asthenia", "seizure", "hearing loss", "gas", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/MERRF_syndrome"
    },
    "Zimmermann\u2013Laband syndrome": {
        "summary": "Zimmermann\u2013Laband syndrome (ZLS), also known as Laband Zimmermann syndrome, and Laband's Syndrome, is an extremely rare autosomal dominant congenital disorder.",
        "symptoms": ["edema", "gas"],
        "url": "https://en.wikipedia.org/wiki/Zimmermann%E2%80%93Laband_syndrome"
    },
    "Sealpox": {
        "summary": "The Sealpox is a cutaneous condition caused by parapoxvirus, usually affecting seal handlers who have been bitten by infected harbor or grey seals.:394 First identified in 1969, it wasn't unequivocally proven to be transmissible to humans until 2005, though such transmission had been reported at least as early as 1987. It causes lesions that closely resemble those caused by orf. As many as 2% of seals in marine mammal rehabilitation facilities in North America may have it.",
        "symptoms": ["fever", "stings", "skin lesion"],
        "url": "https://en.wikipedia.org/wiki/Sealpox"
    },
    "Muckle\u2013Wells syndrome": {
        "summary": "Muckle\u2013Wells syndrome (MWS), also known as urticaria-deafness-amyloidosis syndrome (UDA), is a rare autosomal dominant disease which causes sensorineural deafness, recurrent hives, and can lead to amyloidosis. Individuals with MWS often have episodic fever, chills, and joint pain. As a result, MWS is considered a type of periodic fever syndrome. MWS is caused by a defect in the CIAS1 gene which creates the protein cryopyrin. MWS is closely related to two other syndromes, familial cold urticaria and neonatal onset multisystem inflammatory disease\u2014in fact, all three are related to mutations in the same gene and subsumed under the term cryopyrin-associated periodic syndromes (CAPS).",
        "symptoms": ["joint pain", "deafness", "inflammation", "hearing loss", "fever", "malaise", "chills", "urticaria"],
        "url": "https://en.wikipedia.org/wiki/Muckle%E2%80%93Wells_syndrome"
    },
    "Fields' disease": {
        "summary": "Fields' disease is considered to be one of the rarest known diseases in the world, with only two diagnosed cases in history. It is named after Welsh twins Catherine and Kirstie Fields, of Llanelli. Fields' disease is a neuromuscular disease, causing muscular degeneration.",
        "symptoms": ["asthenia", "muscle spasm", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Fields%27_disease"
    },
    "Li\u2013Fraumeni syndrome": {
        "summary": "Li\u2013Fraumeni syndrome is a rare, autosomal dominant, hereditary disorder that pre-disposes carriers to cancer development. It was named after two American physicians, Frederick Pei Li and Joseph F. Fraumeni, Jr., who first recognized the syndrome after reviewing the medical records and death certificates of 648 childhood rhabdomyosarcoma patients. This syndrome is also known as the sarcoma, breast, leukaemia and adrenal gland (SBLA) syndrome.",
        "symptoms": ["edema", "rash", "ataxia", "ptosis", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Li%E2%80%93Fraumeni_syndrome"
    },
    "Glanzmann's thrombasthenia": {
        "summary": "Glanzmann's thrombasthenia is an abnormality of the platelets. It is an extremely rare coagulopathy (bleeding disorder due to a blood abnormality), in which the platelets contain defective or low levels of glycoprotein IIb/IIIa (GpIIb/IIIa), which is a receptor for fibrinogen. As a result, no fibrinogen bridging of platelets to other platelets can occur, and the bleeding time is significantly prolonged.",
        "symptoms": ["asthenia", "bleeding tendency", "bleeding", "gas", "epistaxis"],
        "url": "https://en.wikipedia.org/wiki/Glanzmann%27s_thrombasthenia"
    },
    "Auto-brewery syndrome": {
        "summary": "Auto-brewery syndrome, also known as gut fermentation syndrome, is a rare medical condition in which intoxicating quantities of ethanol are produced through endogenous fermentation within the digestive system. One gastrointestinal organism, Saccharomyces cerevisiae, a type of yeast, has been identified as a pathogen for this condition.",
        "symptoms": ["dry mouth", "belching", "anxiety", "dizziness", "depression", "fatigue", "gas"],
        "url": "https://en.wikipedia.org/wiki/Auto-brewery_syndrome"
    },
    "TEMPI syndrome": {
        "summary": "TEMPI Syndrome is a novel orphan disease where the patients share five characteristics from which the acronym is derived: telangiectasias, elevated erythropoietin and erythrocytosis, monoclonal gammopathy, perinephric fluid collection, and intrapulmonary shunting.",
        "symptoms": ["bleeding"],
        "url": "https://en.wikipedia.org/wiki/TEMPI_syndrome"
    },
    "Acheiropodia": {
        "summary": "Acheiropodia (ACHP), also known as Horn-Kolb Syndrome, Acheiropody and Aleijadinhos (Brazilian type), is an autosomal recessive disorder that results in hemimelia, a lack of formation of the distal extremities.",
        "symptoms": ["scoliosis", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Acheiropodia"
    },
    "Nodding disease": {
        "summary": "Nodding disease or nodding syndrome is a recent, little-known disease which emerged in Sudan in the 1960s. It is a mentally and physically disabling disease that only affects children, typically between the ages of 5 and 15. It is currently restricted to small regions in South Sudan, Tanzania, and northern Uganda. Prior to the South Sudan outbreaks and subsequent limited spread, the disease was first described in 1962 existing in secluded mountainous regions of Tanzania, although the connection between that disease and nodding syndrome was only made recently.",
        "symptoms": ["seizure", "blindness"],
        "url": "https://en.wikipedia.org/wiki/Nodding_disease"
    },
    "Tay\u2013Sachs disease": {
        "summary": "Tay\u2013Sachs disease (also known as GM2 gangliosidosis or hexosaminidase\u00a0A deficiency) is a rare autosomal recessive genetic disorder. In its most common variant (known as infantile Tay\u2013Sachs disease), it causes a progressive deterioration of nerve cells and of mental and physical abilities that begins around seven months of age and usually results in death by the age of four. The disease occurs when harmful quantities of cell membrane components known as gangliosides accumulate in the brain's nerve cells, eventually leading to the premature death of the cells. A ganglioside is a form of sphingolipid, which makes Tay\u2013Sachs disease a member of the sphingolipidoses. There is no known cure or treatment.",
        "symptoms": ["aching", "weakness", "seizure", "dysarthria", "depression", "ataxia", "paralysis", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Tay%E2%80%93Sachs_disease"
    },
    "Hydranencephaly": {
        "summary": "Hydranencephaly or hydrancephaly  is a condition in which the brain's cerebral hemispheres are absent to varying degrees and the remaining cranial cavity is filled with cerebrospinal fluid.",
        "symptoms": ["blindness", "deafness", "trauma", "seizure", "intracranial pressure", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Hydranencephaly"
    },
    "Frank\u2013ter Haar syndrome": {
        "summary": "Frank ter Haar-syndrome (FTHS), also known as Ter Haar-syndrome, is a rare disease characterized by abnormalities that affect bone, heart, and eye development. Children born with the disease usually die very young.",
        "symptoms": ["edema"],
        "url": "https://en.wikipedia.org/wiki/Frank%E2%80%93ter_Haar_syndrome"
    },
    "Von Hippel\u2013Lindau disease": {
        "summary": "Von Hippel\u2013Lindau disease (VHL) is a disease which results from a mutation in the von Hippel\u2013Lindau tumor suppressor gene on chromosome 3p25.3.",
        "symptoms": ["mania", "weakness", "high blood pressure", "dizziness", "headache", "tremor", "ataxia", "loss of vision", "gas"],
        "url": "https://en.wikipedia.org/wiki/Von_Hippel%E2%80%93Lindau_disease"
    },
    "Malakoplakia": {
        "summary": "Malakoplakia or malacoplakia (from Greek Malako \"soft\" + Plako \"plaque\") is a rare inflammatory condition which makes its presence known as a papule, plaque or ulceration that usually affects the genitourinary tract.:274 However, it may also be associated with other bodily organs. It was initially described in the early 20th century as soft yellowish plaques found on the mucosa of the urinary bladder. Microscopically it is characterized by the presence of foamy histiocytes with basophilic inclusions called Michaelis\u2013Gutmann bodies.",
        "symptoms": ["ptosis", "urinary incontinence", "incontinence"],
        "url": "https://en.wikipedia.org/wiki/Malakoplakia"
    },
    "Achondroplasia": {
        "summary": "Achondroplasia is a common cause of dwarfism. It occurs as a sporadic mutation in approximately 80% of cases (associated with advanced paternal age) or it may be inherited as an autosomal dominant genetic disorder.",
        "symptoms": ["asthenia", "sleep apnea", "gas"],
        "url": "https://en.wikipedia.org/wiki/Achondroplasia"
    },
    "Crandall syndrome": {
        "summary": "Crandall syndrome is a very rare congenital disorder characterised by progressive sensorineural hearing loss, hair loss associated with pili torti, and hypogonadism demonstrated through low levels of luteinising hormone and growth hormone. It is thought to be an autosomal recessive disorder closely related to Bj\u00f6rnstad syndrome which presents similarly but without hypogonadism.",
        "symptoms": ["alopecia", "hair loss", "deafness", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Crandall_syndrome"
    },
    "Juvenile primary lateral sclerosis": {
        "summary": "Juvenile primary lateral sclerosis (JPLS) , also known as primary lateral sclerois (PLSJ), is a rare genetic disorder, with a small number of reported cases, characterized by progressive weakness and stiffness of muscles in the arms, legs, and face. The disorder damages motor neurons, which are specialized nerve cells in the brain and spinal cord that control muscle movement.",
        "symptoms": ["muscle spasm", "drooling", "weakness", "slurred speech", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Juvenile_primary_lateral_sclerosis"
    },
    "Fibromuscular dysplasia": {
        "summary": "Fibromuscular dysplasia (FMD) is a non-atherosclerotic, non-inflammatory disease of the blood vessels that causes abnormal growth within the wall of an artery. FMD has been found in nearly every arterial bed in the body. However, the most common arteries affected are the renal and carotid arteries.",
        "symptoms": ["weakness", "trauma", "dizziness", "claudication", "tinnitus", "abdominal pain", "headache", "insomnia", "bleeding", "fatigue", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Fibromuscular_dysplasia"
    },
    "Purine nucleoside phosphorylase deficiency": {
        "summary": "Purine nucleoside phosphorylase deficiency, often called PNP-deficiency, is a rare autosomal recessive metabolic disorder which results in immunodeficiency.",
        "symptoms": ["ataxia", "gas", "edema"],
        "url": "https://en.wikipedia.org/wiki/Purine_nucleoside_phosphorylase_deficiency"
    },
    "Cerebrotendineous xanthomatosis": {
        "summary": "Cerebrotendineous xanthomatosis or cerebrotendinous xanthomatosis (CTX), also called cerebral cholesterosis, is an autosomal recessive form of xanthomatosis. It falls within a group of genetic disorders called the leukodystrophies.",
        "symptoms": ["ataxia"],
        "url": "https://en.wikipedia.org/wiki/Cerebrotendineous_xanthomatosis"
    },
    "Cranio\u2013lenticulo\u2013sutural dysplasia": {
        "summary": "Cranio\u2013lenticulo\u2013sutural dysplasia (CLSD, or Boyadjiev-Jabs syndrome) is a neonatal/infancy disease caused by a disorder in the 14th chromosome. It is an autosomal recessive disorder, meaning that both recessive genes must be inherited from each parent in order for the disease to manifest itself. The disease causes a significant dilation of the endoplasmic reticulum in fibroblasts of the host with CLSD. Due to the distension of the endoplasmic reticulum, export of proteins (such as collagen) from the cell is disrupted.",
        "symptoms": ["scoliosis", "ataxia", "gas", "hyperpigmentation"],
        "url": "https://en.wikipedia.org/wiki/Cranio%E2%80%93lenticulo%E2%80%93sutural_dysplasia"
    },
    "Batten disease": {
        "summary": "Batten disease is an extremely rare and fatal autosomal recessive neurodegenerative disorder that begins in childhood. It is the most common form of a group of disorders called the neuronal ceroid lipofuscinoses (NCLs).",
        "symptoms": ["seizure", "hyperventilation", "constipation"],
        "url": "https://en.wikipedia.org/wiki/Batten_disease"
    },
    "Caudal regression syndrome": {
        "summary": "Caudal regression syndrome or sacral agenesis (or hypoplasia of the sacrum) is a congenital disorder in which there is abnormal fetal development of the lower spine\u2014the caudal partition of the spine.",
        "symptoms": ["edema", "paralysis", "gas", "incontinence"],
        "url": "https://en.wikipedia.org/wiki/Caudal_regression_syndrome"
    },
    "Erdheim\u2013Chester disease": {
        "summary": "Erdheim\u2013Chester disease (also known as Erdheim\u2013Chester syndrome or polyostotic sclerosing histiocytosis) is a rare disease characterized by the abnormal multiplication of a specific type of white blood cells called histiocytes, or tissue macrophages (technically, this disease is termed a non-Langerhans-cell histiocytosis). Usually, onset is in middle age. The disease involves an infiltration of lipid-laden macrophages, multinucleated giant cells, an inflammatory infiltrate of lymphocytes and histiocytes in the bone marrow, and a generalized sclerosis of the long bones.",
        "symptoms": ["aching", "dyspnea", "bloody diarrhea", "liver failure", "exophthalmos", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Erdheim%E2%80%93Chester_disease"
    },
    "Omenn syndrome": {
        "summary": "Omenn syndrome is an autosomal recessive severe combined immunodeficiency associated with hypomorphic missense mutations in immunologically relevant genes of T-cells (and B-cells) such as recombination activating genes (RAG1 and RAG2), IL-7 Receptor \u03b1 gene (IL7R\u03b1), DCLRE1C-Artemis, RMRP-CHH, DNA-Ligase IV, common gamma chain, WHN-FOXN1, ZAP-70 and complete DiGeorge anomaly (DiGeorge Syndrome; CHARGE).",
        "symptoms": ["edema", "swollen lymph nodes", "inflammation", "scaly skin", "rash", "ataxia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Omenn_syndrome"
    },
    "Gastric atresia": {
        "summary": "Gastric atresia is the complete occlusion of the pyloric outlet of the stomach and is an extremely rare event.",
        "symptoms": ["gas"],
        "url": "https://en.wikipedia.org/wiki/Gastric_atresia"
    },
    "Keutel syndrome": {
        "summary": "Keutel syndrome (KS) is a rare autosomal recessive genetic disorder characterized by abnormal diffuse cartilage calcification, hypoplasia of the mid-face, peripheral pulmonary stenosis, hearing loss, short distal phalanges (tips) of the fingers and mild mental retardation. Individuals with KS often present with peripheral pulmonary stenosis, brachytelephalangism, sloping forehead, midface hypoplasia, and receding chin. It is associated with abnormalities in the gene coding for matrix gla protein (MGP). Being an autosomal recessive disorder, it may be inherited from two unaffected, abnormal MGP-carrying parents. Thus, people who inherit two affected MGP genes will likely inherit KS.",
        "symptoms": ["edema", "dyspnea", "deafness", "hearing loss", "depression", "gas"],
        "url": "https://en.wikipedia.org/wiki/Keutel_syndrome"
    },
    "Marfan syndrome": {
        "summary": "Marfan syndrome (MFS) is a genetic disorder of the connective tissue. The degree to which people are affected varies. People with Marfan tend to be tall, and thin, with long arms, legs, fingers and toes. They also typically have flexible joints and scoliosis. The most serious complications involve the heart and aorta with an increased risk of mitral valve prolapse and aortic aneurysm. Other commonly affected areas include the lungs, eyes, bones and the covering of the spinal cord.",
        "symptoms": ["sleep apnea", "aching", "edema", "weakness", "deformity", "palpitation", "cirrhosis", "leg pain", "heart murmur", "scoliosis", "obesity", "shortness of breath", "headache", "chest pain", "abdominal pain", "blurred vision", "ataxia", "myalgia", "fatigue", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Marfan_syndrome"
    },
    "Leukocyte adhesion deficiency": {
        "summary": "Leukocyte adhesion deficiency (LAD), is a rare autosomal recessive disorder characterized by immunodeficiency resulting in recurrent infections. LAD is currently divided into three subtypes: LAD1, LAD2, and the recently described LAD3, also known as LAD-1/variant. In LAD3, the immune defects are supplemented by a Glanzmann thrombasthenia-like bleeding tendency.",
        "symptoms": ["bleeding tendency", "abscess", "asthenia", "inflammation", "bleeding", "gas"],
        "url": "https://en.wikipedia.org/wiki/Leukocyte_adhesion_deficiency"
    },
    "Currarino syndrome": {
        "summary": "The Currarino syndrome (also Currarino triad) is an inherited congenital disorder where (1) the sacrum (the fused vertebrae forming the back of the pelvis) is not formed properly, (2) there is a mass in the presacral space in front of the sacrum, and (3) there are malformations of the anus or rectum. It can also cause an anterior meningocele or a presacral teratoma.",
        "symptoms": ["rash", "edema"],
        "url": "https://en.wikipedia.org/wiki/Currarino_syndrome"
    },
    "Urban\u2013Rogers\u2013Meyer syndrome": {
        "summary": "Urban\u2013Rogers\u2013Meyer syndrome, also known as Prader\u2013Willi habitus, osteopenia, and camptodactyly or Urban syndrome, is an extremely rare inherited congenital disorder first described by Urban et al. (1979). It is characterized by genital anomalies, mental retardation, obesity, contractures of fingers, and osteoporosis, though further complications are known.",
        "symptoms": ["obesity", "gas", "edema"],
        "url": "https://en.wikipedia.org/wiki/Urban%E2%80%93Rogers%E2%80%93Meyer_syndrome"
    },
    "Metachromatic leukodystrophy": {
        "summary": "Metachromatic leukodystrophy (MLD, also called Arylsulfatase A deficiency) is a lysosomal storage disease which is commonly listed in the family of leukodystrophies as well as among the sphingolipidoses as it affects the metabolism of sphingolipids. Leukodystrophies affect the growth and/or development of myelin, the fatty covering which acts as an insulator around nerve fibers throughout the central and peripheral nervous systems. MLD involves cerebroside sulfate accumulation. Metachromatic leukodystrophy, like most enzyme deficiencies, has an autosomal recessive inheritance pattern.",
        "symptoms": ["sleep apnea", "akathisia", "edema", "weakness", "blindness", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "hypoventilation", "sleep disorders", "convulsions", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "loss of vision", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Metachromatic_leukodystrophy"
    },
    "Periodic paralysis": {
        "summary": "Periodic paralysis (also known as Myoplegia paroxysmalis familiaris) is a group of rare genetic diseases that lead to weakness or paralysis (rarely death) from common triggers such as cold, heat, high carbohydrate meals, not eating, stress or excitement and physical activity of any kind. The underlying mechanism of these diseases are malfunctions in the ion channels in skeletal muscle cell membranes that allow electrically charged ions to leak in or out of the muscle cell, causing the cell to depolarize and become unable to move (a channelopathy).",
        "symptoms": ["weakness", "asthenia", "scoliosis", "headache", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Periodic_paralysis"
    },
    "Heart-hand diseases": {
        "summary": "Heart-hand syndromes are a group of rare diseases that manifest with both heart and limb deformities.",
        "symptoms": ["tachycardia", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Heart-hand_diseases"
    },
    "Microphthalmia": {
        "summary": "Microphthalmia (Greek: \u03bc\u03b9\u03ba\u03c1\u03cc\u03c2 micros = small; \u1f40\u03c6\u03b8\u03b1\u03bb\u03bc\u03cc\u03c2 ophthalmos = eye), also referred as microphthalmos, is a developmental disorder of the eye in which one (unilateral microphthalmia) or both (bilateral microphthalmia) eyes are abnormally small and have anatomic malformations. It is different from nanophthalmos in which the eye is small in size but has no anatomical alterations. ",
        "symptoms": ["ptosis", "blindness"],
        "url": "https://en.wikipedia.org/wiki/Microphthalmia"
    },
    "Usher syndrome": {
        "summary": "Usher syndrome, also known as Hallgren syndrome, Usher-Hallgren syndrome, retinitis pigmentosa-dysacusis syndrome, or dystrophia retinae dysacusis syndrome, is an extremely rare genetic disorder caused by a mutation in any one of at least 11 genes resulting in a combination of hearing loss and visual impairment. It is a leading cause of deafblindness and is at present incurable.",
        "symptoms": ["vertigo", "aching", "phobia", "blindness", "trauma", "abscess", "deafness", "anxiety", "hearing loss", "tinnitus", "nystagmus", "ataxia", "cirrhosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Usher_syndrome"
    },
    "Marden\u2013Walker syndrome": {
        "summary": "Marden\u2013Walker syndrome (MWS) is a rare autosomal recessive congenital disorder. It is characterized by blepharophimosis, microcephaly, micrognathia, multiple joint contractures, arachnodactyly, camptodactyly, kyphoscoliosis, and delayed motor development and is often associated with cystic dysplastic kidneys, dextrocardia, Dandy-Walker malformation, and agenesis of corpus callosum\".",
        "symptoms": ["ptosis", "abdominal distension", "weakness", "scoliosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Marden%E2%80%93Walker_syndrome"
    },
    "Wilson's disease": {
        "summary": "Wilson's disease is a genetic disorder in which copper builds up in the body. Symptoms are typically related to the brain and liver. Liver related symptoms include vomiting, weakness, fluid build up in the abdomen, swelling of the legs, yellowish skin, and itchiness. Brain related symptoms include tremors, muscle stiffness, trouble speaking, personality changes, anxiety, and seeing or hearing things that others do not.",
        "symptoms": ["joint pain", "bleeding tendency", "edema", "weakness", "bradykinesia", "aphasia", "seizure", "anxiety", "skin rash", "liver failure", "apraxia", "insomnia", "swelling", "itchiness", "headache", "memory loss", "muscle weakness", "sleep apnea", "myopathy", "confusion", "abscess", "asthenia", "tremors", "slurred speech", "inflammation", "vomiting", "psychiatric problem", "hypotension", "infertility", "bleeding", "cirrhosis", "akathisia", "hypoventilation", "sleep disorders", "arrhythmia", "rash", "depression", "trouble speaking", "tired", "cataplexy", "tremor", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Wilson%27s_disease"
    },
    "Aposthia": {
        "summary": "Aposthia is a rare congenital condition in humans, in which the foreskin of the penis is missing.",
        "symptoms": ["rash"],
        "url": "https://en.wikipedia.org/wiki/Aposthia"
    },
    "Dubowitz syndrome": {
        "summary": "Dubowitz syndrome is a rare genetic disorder characterized by microcephaly, growth retardation and a characteristic facial appearance (small, round, triangular shaped with a pointed, receding chin, a broad, wide-tipped nose, and wide-set eyes with drooping eyelids). Symptoms vary among patients, but other characteristics include a soft, high pitched voice; partial webbing of fingers and toes; palate deformations; genital abnormalities; eczema; hyperactivity; preference for concrete thinking over abstract; language difficulties and aversion to crowds. The pathogenesis of the disease is yet to be identified and no medical tests can definitively diagnose the disease. The main method of diagnosis is through identification of facial phenotype. Since it was first described in 1965 by English physician Victor Dubowitz, over 140 cases have been reported worldwide. Although the majority of cases have been reported from the United States, Germany and Russia, the disorder appears to affect both genders and all ethnicities equally.",
        "symptoms": ["alcohol abuse", "edema", "drooping eyelid", "hyperactivity", "seizure", "gas"],
        "url": "https://en.wikipedia.org/wiki/Dubowitz_syndrome"
    },
    "Arthrogryposis": {
        "summary": "Arthrogryposis multiplex congenita (AMC), or simply arthrogryposis, describes congenital joint contractures in two or more areas of the body. It derives its name from Greek, literally meaning \"curving of joints\" (arthron, \"joint\"; gr\u0233p\u014dsis, late Latin form of late Greek gr\u016bp\u014dsis, \"hooking\"). Children born with one or more joint contractures have abnormal fibrosis of the muscle tissue causing muscle shortening, and therefore are unable to perform active extension and flexion in the affected joint or joints. AMC has been divided into three groups: amyoplasia, distal arthrogryposis, and syndromic. Amyoplasia is characterized by severe joint contractures and muscle weakness. Distal arthrogryposis mainly involves the hands and feet. Types of arthrogryposis with a primary neurological or muscle disease belong to the syndromic group.",
        "symptoms": ["weakness", "deformity", "deafness", "asthenia", "seizure", "inflammation", "akinesia", "scoliosis", "hyperthermia", "muscle weakness", "bleeding", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Arthrogryposis"
    },
    "Cryopyrin-associated periodic syndrome": {
        "summary": "Cryopyrin-associated periodic syndrome (CAPS) is a group of rare, heterogeneous autoinflammatory disease characterized by interleukin 1\u03b2-mediated systemic inflammation and clinical symptoms involving skin, joints, central nervous system, and eyes. It encompasses a spectrum of three clinically overlapping autoinflammatory syndromes including familial cold autoinflammatory syndrome (FCAS, formerly termed familial cold-induced urticaria), the Muckle-Wells syndrome (MWS), and neonatal-onset multisystem inflammatory disease (NOMID, also called chronic infantile neurologic cutaneous and articular syndrome or CINCA) that were originally thought to be distinct entities, but in fact share a single genetic mutation and pathogenic pathway.",
        "symptoms": ["edema", "deformity", "seizure", "inflammation", "hearing loss", "rash", "fever", "malaise", "skin rash", "urticaria", "headache", "bone deformity", "myalgia", "fatigue", "impaired vision"],
        "url": "https://en.wikipedia.org/wiki/Cryopyrin-associated_periodic_syndrome"
    },
    "K\u00f6hler disease": {
        "summary": "K\u00f6hler disease (also spelled \"Kohler\" and referred to in some texts as Kohler Disease II) is a rare bone disorder of the foot found in children between six and nine years of age. The disease typically affects boys, but it can also affect girls. It was first described in 1908 by Alban K\u00f6hler (1874\u20131947), a German radiologist.",
        "symptoms": ["abscess", "swelling", "inflammation"],
        "url": "https://en.wikipedia.org/wiki/K%C3%B6hler_disease"
    },
    "Saethre\u2013Chotzen syndrome": {
        "summary": "Saethre\u2013Chotzen syndrome (SCS), also known as Acrocephalosyndactyly type III is a rare congenital disorder associated with craniosynostosis (premature closure of one or more of the sutures between the bones of the skull). This affects the shape of the head and face, resulting in a cone-shaped head and an asymmetrical face. Individuals with SCS also have droopy eyelids (ptosis), widely spaced eyes (hypertelorism), and minor birth defects of the hands and feet (syndactyly). In addition, individuals with more severe cases of SCS may have mild to moderate mental retardation or learning disabilities. Depending on the level of severity, some individuals with SCS may require some form of medical or surgical intervention. Most individuals with SCS live fairly normal lives, regardless of whether medical treatment is needed or not.",
        "symptoms": ["edema", "speech problem", "drooping eyelid", "deformity", "intracranial pressure", "hearing loss", "rash", "ptosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Saethre%E2%80%93Chotzen_syndrome"
    },
    "Floating\u2013Harbor syndrome": {
        "summary": "Floating\u2013Harbor syndrome, also known as Pelletier\u2013Leisti syndrome, is a rare disease with fewer than 50 cases described in the literature. It is usually diagnosed in early childhood and is characterized by the triad of proportionate short stature with delayed bone age, characteristic facial appearance, and delayed speech development. Although its cause is unknown, it is thought to result from genetic mutation, and diagnosis is established by the presence of a heterozygous SRCAP mutation in those with clinical findings of FHS.",
        "symptoms": ["dental problem", "hyperactivity", "seizure", "dysarthria", "behavioral disturbances", "depressed", "irregular periods"],
        "url": "https://en.wikipedia.org/wiki/Floating%E2%80%93Harbor_syndrome"
    },
    "Morquio syndrome": {
        "summary": "Morquio syndrome (referred to as mucopolysaccharidosis IV, MPS IV, Morquio-Brailsford syndrome, or Morquio) is an autosomal recessive mucopolysaccharide storage disease (see also lysosomal storage disorder), usually inherited.:544 It is a rare type of birth defect with serious consequences. In the US, the incidence rate for Morquio is estimated at between 1 in 200,000 and 1 in 300,000 live births.",
        "symptoms": ["scoliosis", "deformity", "heart murmur"],
        "url": "https://en.wikipedia.org/wiki/Morquio_syndrome"
    },
    "Ewing's sarcoma": {
        "summary": "Ewing's sarcoma or Ewing sarcoma (/\u02c8ju\u02d0\u026a\u014b/) is a malignant small, round, blue cell tumor. It is a rare disease in which cancer cells are found in the bone or in soft tissue. The most common areas in which it occurs are the pelvis, the femur, the humerus, the ribs and clavicle (collar bone).",
        "symptoms": ["swelling", "infertility", "fever", "myalgia", "ptosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Ewing%27s_sarcoma"
    },
    "White sponge nevus": {
        "summary": "White sponge nevus (WSN, or white sponge naevus, Cannon's disease, hereditary leukokeratosis of mucosa, white sponge nevus of Cannon, familial white folded dysplasia, or oral epithelial nevus), is an autosomal dominant condition of the oral mucosa (the mucous membrane lining of the mouth). It is caused by a mutations in certain genes coding for keratin, which causes a defect in the normal process of keratinization of the mucosa. This results in lesions which are thick, white and velvety on the inside of the cheeks within the mouth. Usually, these lesions are present from birth or develop during childhood. The condition is entirely harmless, and no treatment is required",
        "symptoms": ["edema", "trauma", "abscess", "laceration", "abrasion", "ataxia", "ptosis", "cirrhosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/White_sponge_nevus"
    },
    "Multiple sulfatase deficiency": {
        "summary": "Multiple sulfatase deficiency (also known as \"Austin disease,\" and \"Mucosulfatidosis\") is a very rare autosomal recessive:561 lysosomal storage disease caused by a deficiency in multiple sulfatase enzymes, or in formylglycine-generating enzyme, which activates sulfatases.:502 It is similar to mucopolysaccharidosis.",
        "symptoms": ["tremor", "ataxia", "deafness"],
        "url": "https://en.wikipedia.org/wiki/Multiple_sulfatase_deficiency"
    },
    "Hypervalinemia": {
        "summary": "Hypervalinemia, also called valinemia or valine transaminase deficiency, is a rare autosomal recessive metabolic disorder in which urinary and serum levels of the branched-chain amino acid valine are elevated, without related elevation of the branched-chain amino acids leucine and isoleucine. It is caused by a deficiency of the enzyme valine transaminase.",
        "symptoms": ["dehydration", "vomiting"],
        "url": "https://en.wikipedia.org/wiki/Hypervalinemia"
    },
    "Lipoid congenital adrenal hyperplasia": {
        "summary": "Lipoid congenital adrenal hyperplasia is an endocrine disorder that is an uncommon and potentially lethal form of congenital adrenal hyperplasia (CAH). It arises from defects in the earliest stages of steroid hormone synthesis: the transport of cholesterol into the mitochondria and the conversion of cholesterol to pregnenolone\u2014the first step in the synthesis of all steroid hormones. Lipoid CAH causes mineralocorticoid deficiency in affected infants and children. Male infants are severely undervirilized causing their external genitalia to look feminine. The adrenals are large and filled with lipid globules derived from cholesterol.",
        "symptoms": ["edema", "dehydration", "vomiting", "hyperpigmentation", "weight gain", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Lipoid_congenital_adrenal_hyperplasia"
    },
    "Rosai\u2013Dorfman disease": {
        "summary": "Rosai\u2013Dorfman disease, also known as sinus histiocytosis with massive lymphadenopathy, is a rare disorder of unknown etiology that is characterized by abundant histiocytes in the lymph nodes throughout the body.,",
        "symptoms": ["hemoptysis"],
        "url": "https://en.wikipedia.org/wiki/Rosai%E2%80%93Dorfman_disease"
    },
    "Fitzsimmons\u2013Guilbert syndrome": {
        "summary": "Fitzsimmons\u2013Guilbert syndrome is an extremely rare genetic disease characterized by a slowly progressive spastic paraplegia, skeletal anomalies of the hands and feet with brachydactyly type E, cone-shaped epiphyses, abnormal metaphyseal\u2013phalangeal pattern profile, sternal anomaly (pectus carinatum or excavatum), dysarthria, and mild intellectual deficit.",
        "symptoms": ["dysarthria"],
        "url": "https://en.wikipedia.org/wiki/Fitzsimmons%E2%80%93Guilbert_syndrome"
    },
    "Gerstmann\u2013Str\u00e4ussler\u2013Scheinker syndrome": {
        "summary": "Gerstmann\u2013Str\u00e4ussler\u2013Scheinker syndrome (GSS) is a very rare, usually familial, fatal neurodegenerative disease that affects patients from 20 to 60 years in age. Though exclusively heritable, this extremely rare disease is classified with the transmissible spongiform encephalopathies (TSE) due to the causative role played by PRNP, the human prion protein.",
        "symptoms": ["blindness", "deafness", "insomnia", "dysarthria", "visual disturbances", "nystagmus", "ataxia", "loss of memory"],
        "url": "https://en.wikipedia.org/wiki/Gerstmann%E2%80%93Str%C3%A4ussler%E2%80%93Scheinker_syndrome"
    },
    "Rat-bite fever": {
        "summary": "Rat-bite fever is an acute, febrile human illness caused by bacteria transmitted by rodents, rats, or mice, in most cases, which is passed from rodent to human by the rodent's urine or mucous secretions. Alternative names for rat-bite fever include streptobacillary fever, streptobacillosis, spirillary fever, sodoku, and epidemic arthritic erythema. It is a rare disease spread by infected rodents and can be caused by two specific types of bacteria. Most cases occur in Japan, but specific strains of the disease are present in the United States, Europe, Australia, and Africa. Some cases are diagnosed after patients were exposed to the urine or bodily secretions of an infected animal. These secretions can come from the mouth, nose, or eyes of the rodent. The majority of cases are due to the animal's bite. It can also be transmitted throughout food or water contaminated with rat feces or urine. Other animals can be infected with this disease, including weasels, gerbils, and squirrels. Household pets such as dogs or cats exposed to these animals can also carry the disease and infect humans. If a person is bitten by a rodent, it is important to quickly wash and cleanse the wound area thoroughly with antiseptic solution to reduce the risk of infection.",
        "symptoms": ["rectal pain", "joint pain", "rigors", "abscess", "swollen lymph nodes", "swelling", "inflammation", "shivering", "muscle aches", "rash", "vomiting", "chills", "fever", "irritation", "headache", "gas"],
        "url": "https://en.wikipedia.org/wiki/Rat-bite_fever"
    },
    "Microvillous inclusion disease": {
        "summary": "Microvillus inclusion disease, also known as Davidson's disease, congenital microvillus atrophy and, less specifically, microvillus atrophy (note: microvillus is often misspelled as microvillous), is a rare genetic disorder of the small intestine that is inherited in an autosomal recessive pattern.",
        "symptoms": ["dehydration", "gas"],
        "url": "https://en.wikipedia.org/wiki/Microvillous_inclusion_disease"
    },
    "Tuberous sclerosis": {
        "summary": "Tuberous sclerosis complex (TSC) is a rare multisystem genetic disease that causes benign tumors to grow in the brain and on other vital organs such as the kidneys, heart, liver, eyes, lungs, and skin. A combination of symptoms may include seizures, intellectual disability, developmental delay, behavioral problems, skin abnormalities, and lung and kidney disease. TSC is caused by a mutation of either of two genes, TSC1 and TSC2, which code for the proteins hamartin and tuberin, respectively. These proteins act as tumor growth suppressors, agents that regulate cell proliferation and differentiation.",
        "symptoms": ["edema", "seizure", "boil", "aggression", "swelling", "insect bite", "headache", "hyperpigmentation", "myopathy", "confusion", "skin lesion", "abscess", "learning difficulties", "vomiting", "urticaria", "bleeding", "alopecia", "mania", "trauma", "arrhythmia", "rash", "abrasion", "ataxia", "blister"],
        "url": "https://en.wikipedia.org/wiki/Tuberous_sclerosis"
    },
    "Wallis\u2013Zieff\u2013Goldblatt syndrome": {
        "summary": "Wallis\u2013Zieff\u2013Goldblatt syndrome is a rare condition characterized by inherited skeletal disorders manifested mainly as rhizomelic short stature and lateral clavicular defects. It is also known as Cleidorhizomelic syndrome.",
        "symptoms": ["scoliosis", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Wallis%E2%80%93Zieff%E2%80%93Goldblatt_syndrome"
    },
    "ATR-16 syndrome": {
        "summary": "ATR-16 syndrome, also called Alpha-Thalassemia-Intellectual disability syndrome is a rare disease characterized by monosomy on part of chromosome 16.",
        "symptoms": ["seizure"],
        "url": "https://en.wikipedia.org/wiki/ATR-16_syndrome"
    },
    "Isovaleric acidemia": {
        "summary": "Isovaleric acidemia, also called isovaleric aciduria or isovaleric acid CoA dehydrogenase deficiency, is a rare autosomal recessive metabolic disorder which disrupts or prevents normal metabolism of the branched-chain amino acid leucine. It is a classical type of organic acidemia.",
        "symptoms": ["lack of energy", "seizure", "vomiting"],
        "url": "https://en.wikipedia.org/wiki/Isovaleric_acidemia"
    },
    "Arterial tortuosity syndrome": {
        "summary": "Arterial tortuosity syndrome (ATS) is a rare congenital connective tissue condition disorder characterized by elongation and generalized tortuosity of the major arteries including the aorta. It is associated with hyperextensible skin and hypermobility of joints, however symptoms vary depending on the patient. Because ATS is so rare, not much is known about the disease.",
        "symptoms": ["ataxia", "headache", "hypotension"],
        "url": "https://en.wikipedia.org/wiki/Arterial_tortuosity_syndrome"
    },
    "Leber's congenital amaurosis": {
        "summary": "Leber's congenital amaurosis (LCA) is a rare inherited eye disease that appears at birth or in the first few months of life, and affects around 1 in 80,000 of the population. One form of LCA became well known in the scientific community following its successful treatment with gene therapy in 2008.",
        "symptoms": ["red eye", "diplopia", "edema", "phobia", "blindness", "asthenia", "inflammation", "rash", "nystagmus", "exophthalmos", "ptosis", "loss of vision", "gas"],
        "url": "https://en.wikipedia.org/wiki/Leber%27s_congenital_amaurosis"
    },
    "Hereditary spastic paraplegia": {
        "summary": "Hereditary spastic paraplegia (HSP), also known as hereditary spastic paraparesis, familial spastic paraplegias, French settlement disease, or Strumpell-Lorrain disease, is a group of inherited diseases whose main feature is progressive stiffness and contraction (spasticity) in the lower limbs, as a result of damage to or dysfunction of the nerves.",
        "symptoms": ["edema", "weakness", "aphasia", "seizure", "insomnia", "headache", "muscle weakness", "sleep apnea", "gas", "deafness", "abscess", "inflammation", "paresthesia", "hypotension", "paralysis", "akathisia", "deformity", "hypoventilation", "sleep disorders", "depression", "cataplexy", "tremor", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Hereditary_spastic_paraplegia"
    },
    "Dextrocardia": {
        "summary": "Dextrocardia (from Latin dexter, meaning \"right,\" and Greek kardia, meaning \"heart\") is a rare congenital defect in which the apex of the heart is located on the right side of the body. There are two main types of dextrocardia: dextrocardia of embryonic arrest (also known as isolated dextrocardia[citation needed]) and dextrocardia situs inversus. Dextrocardia situs inversus is further divided.",
        "symptoms": ["infertility"],
        "url": "https://en.wikipedia.org/wiki/Dextrocardia"
    },
    "Triple-A syndrome": {
        "summary": "Triple-A syndrome (AAA), also known as Achalasia-Addisonianism-Alacrima syndrome or Allgrove syndrome, is a rare autosomal recessive congenital disorder. In most cases, there is no family history of it. The syndrome was discovered by Jeremy Allgrove and colleagues in 1978. Triple A stands for achalasia-addisonianism-alacrima syndrome. Alacrima is usually the earliest manifestation. It is a progressive disorder that can take years to develop the full blown clinical picture.",
        "symptoms": ["ataxia", "gas", "sweating", "hypotension", "low blood sugar"],
        "url": "https://en.wikipedia.org/wiki/Triple-A_syndrome"
    },
    "Glutathione synthetase deficiency": {
        "summary": "Glutathione synthetase deficiency is a rare autosomal recessive metabolic disorder that prevents the production of glutathione. Glutathione helps prevent damage to cells by neutralizing harmful molecules generated during energy production. Glutathione also plays a role in processing medications and cancer-causing compounds (carcinogens), and building DNA, proteins, and other important cellular components.",
        "symptoms": ["seizure", "loss of coordination", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Glutathione_synthetase_deficiency"
    },
    "Cerebroretinal microangiopathy with calcifications and cysts": {
        "summary": "Cerebroretinal microangiopathy with calcifications and cysts (CRMCC) is a rare genetic disorder, which affects multiple organs. Its hallmarks are widespread progressive calcifications, cysts and abnormalities of the white matter of the brain, usually occurring together with abnormalities of the blood vessels of the retina. Additional features include poor prenatal growth, preterm birth, anemia, osteopenia and bone fractures, and gastrointestinal bleeding. It is caused by compound heterozygous mutations in the conserved telomere maintenance component 1 (CTC1) gene, but its exact pathophysiology is still not well understood.",
        "symptoms": ["blindness", "seizure", "dysarthria", "intracranial pressure", "irritation", "headache", "liver failure", "ataxia", "bleeding", "impaired vision", "gas"],
        "url": "https://en.wikipedia.org/wiki/Cerebroretinal_microangiopathy_with_calcifications_and_cysts"
    },
    "ZAP70 deficiency": {
        "summary": "ZAP70 deficiency, or zeta-chain-associated protein 70 kD deficiency, is a rare autosomal recessive form of severe combined immunodeficiency (SCID).",
        "symptoms": ["edema", "ataxia", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/ZAP70_deficiency"
    },
    "Osteochondrodysplasia": {
        "summary": "Osteochondrodysplasia or skeletal dysplasia is a general term for a disorder of the development (dysplasia) of bone (\"osteo\") and cartilage (\"chondro\").",
        "symptoms": ["learning difficulties", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Osteochondrodysplasia"
    },
    "Porokeratosis": {
        "summary": "Porokeratosis (or parakeratosis) is a specific disorder of keratinization that is characterized histologically by the presence of a cornoid lamella, a thin column of closely stacked, parakeratotic cells extending through the stratum corneum with a thin or absent granular layer.:532",
        "symptoms": ["skin lesion"],
        "url": "https://en.wikipedia.org/wiki/Porokeratosis"
    },
    "Idiopathic sclerosing mesenteritis": {
        "summary": "Idiopathic sclerosing mesenteritis (ISM) or mesenteric panniculitus is a rare disease of the small intestine, characterized by chronic inflammation and eventual fibrosis of the mesentery. It has also been called mesenteric lipodystrophy, or retractile mesenteritis.",
        "symptoms": ["trauma", "inflammation", "abdominal pain", "infertility", "bloating", "gas", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Idiopathic_sclerosing_mesenteritis"
    },
    "Neuronal ceroid lipofuscinosis": {
        "summary": "Neuronal ceroid lipofuscinosis (NCL) is the general name for a family of at least eight genetically separate neurodegenerative disorders that result from excessive accumulation of lipopigments (lipofuscin) in the body's tissues. These lipopigments are made up of fats and proteins. Their name comes from the word stem lipo-, which is a variation on \"lipid\" or \"fat\", and from the term pigment, used because the substances take on a greenish-yellow color when viewed under an ultraviolet light microscope. These lipofuscin materials build up in neuronal cells and many organs, including the liver, spleen, myocardium, and kidneys.",
        "symptoms": ["confusion", "blindness", "seizure", "depressed", "ataxia", "ptosis"],
        "url": "https://en.wikipedia.org/wiki/Neuronal_ceroid_lipofuscinosis"
    },
    "Machado\u2013Joseph disease": {
        "summary": "Machado\u2013Joseph disease (MJD), also known as Machado\u2013Joseph Azorean disease, Machado's disease, Joseph's disease or spinocerebellar ataxia type 3 (SCA3), is a rare autosomal dominantly inherited neurodegenerative disease that causes progressive cerebellar ataxia, which results in a lack of muscle control and coordination of the upper and lower extremities. The symptoms are caused by a genetic mutation that results in an expansion of abnormal \"CAG\" trinucleotide repeats in the ATXN3 gene  that results in an abnormal form of the protein ataxin which causes degeneration of cells in the hindbrain. Some symptoms, such as clumsiness and rigidity, make MJD commonly mistaken for drunkenness or Parkinson's disease.",
        "symptoms": ["edema", "weakness", "aphasia", "seizure", "anxiety", "insomnia", "twitch", "tingling", "double vision", "numbness", "headache", "blurred vision", "sleep apnea", "gas", "abscess", "inflammation", "hypotension", "paralysis", "akathisia", "hypoventilation", "sleep disorders", "cataplexy", "tremor", "ataxia", "twitching"],
        "url": "https://en.wikipedia.org/wiki/Machado%E2%80%93Joseph_disease"
    },
    "Schwartz\u2013Jampel syndrome": {
        "summary": "Schwartz\u2013Jampel syndrome (SJS) is a rare genetic disease caused by a mutation in the HSPG2 gene, which makes the protein perlecan, and causing osteochondrodysplasia associated with myotonia.",
        "symptoms": ["myopathy"],
        "url": "https://en.wikipedia.org/wiki/Schwartz%E2%80%93Jampel_syndrome"
    },
    "Cutis marmorata telangiectatica congenita": {
        "summary": "Cutis marmorata telangiectatica congenita or CMTC is a rare congenital vascular disorder that usually manifests in affecting the blood vessels of the skin. The condition was first recognised and described in 1922 by Cato van Lohuizen, a Dutch pediatrician whose name was later adopted in the other common name used to describe the condition - Van Lohuizen Syndrome. CMTC is also used synonymously with congenital generalized phlebectasia, nevus vascularis reticularis, congenital phlebectasia, livedo telangiectatica, congenital livedo reticularis and Van Lohuizen syndrome.",
        "symptoms": ["paresthesia", "skin lesion", "urticaria"],
        "url": "https://en.wikipedia.org/wiki/Cutis_marmorata_telangiectatica_congenita"
    },
    "MOMO syndrome": {
        "summary": "MOMO syndrome is an extremely rare genetic disorder which belongs to the overgrowth syndromes and has been diagnosed in only six cases around the world, and occurs in 1 in 100 million births. The name is an acronym of the four primary aspects of the disorder: Macrosomia (excessive birth weight), Obesity, Macrocephaly (excessive head size) and Ocular abnormalities. It is unknown if it is a life-limiting condition. MOMO syndrome was first diagnosed in 1993 by Professor C\u00e9lia Priszkulnik Koiffmann, a Brazilian researcher in the Genetic and Clinical Studies of neurodevelopmental disorders.",
        "symptoms": ["obesity", "nystagmus"],
        "url": "https://en.wikipedia.org/wiki/MOMO_syndrome"
    },
    "Estrogen insensitivity syndrome": {
        "summary": "Estrogen insensitivity syndrome (EIS), or estrogen resistance, is a form of congenital estrogen deficiency caused by a defective estrogen receptor (ER), specifically ER\u03b1. Thus, estrogens cannot be recognized and initiate their biological action. Congenital estrogen deficiency can also be caused by a defect in the aromatase enzyme.",
        "symptoms": ["edema", "hair loss", "hyperactivity", "rash", "lower abdominal pain", "abdominal pain", "sterility", "infertility", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Estrogen_insensitivity_syndrome"
    },
    "Rosselli\u2013Gulienetti syndrome": {
        "summary": "Rosselli\u2013Gulienetti syndrome, also known as Zlotogora\u2013Ogur syndrome and Bowen\u2013Armstrong syndrome, is a type of congenital ectodermal dysplasia syndrome. The syndrome is relatively rare and has only been described in a few cases.",
        "symptoms": ["dry skin", "gas"],
        "url": "https://en.wikipedia.org/wiki/Rosselli%E2%80%93Gulienetti_syndrome"
    },
    "Degos disease": {
        "summary": "Degos disease (also called malignant atrophic papulosis) is a rare vasculopathy that affects the lining of the medium and small veins and arteries, resulting in occlusion (blockage of the vessel) and tissue infarction.",
        "symptoms": ["weakness", "skin lesion", "inflammation", "rash", "claudication", "headache", "hypotension", "myalgia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Degos_disease"
    },
    "Wolfram syndrome": {
        "summary": "Wolfram syndrome, also called DIDMOAD (diabetes insipidus, diabetes mellitus, optic atrophy, and deafness), is a rare autosomal-recessive genetic disorder that causes childhood-onset diabetes mellitus, optic atrophy, and deafness as well as various other possible disorders.",
        "symptoms": ["vertigo", "phobia", "blindness", "deafness", "abscess", "hearing loss", "rash", "tinnitus", "nystagmus", "loss of vision"],
        "url": "https://en.wikipedia.org/wiki/Wolfram_syndrome"
    },
    "Pycnodysostosis": {
        "summary": "Pycnodysostosis (from Greek: \u03c0\u03c5\u03ba\u03bd\u03cc\u03c2 (puknos) meaning \"dense\", dys (\"defective\"), and ostosis (\"condition of the bone\")), is a lysosomal storage disease of the bone caused by a mutation in the gene that codes the enzyme cathepsin K.",
        "symptoms": ["abscess", "dental problem", "inflammation", "scoliosis"],
        "url": "https://en.wikipedia.org/wiki/Pycnodysostosis"
    },
    "Autoimmune polyendocrine syndrome": {
        "summary": "In medicine, autoimmune polyendocrine syndromes (APSs), also called autoimmune polyglandular syndromes (APSs), polyglandular autoimmune syndromes (PGASs), or polyendocrine autoimmune syndromes, are a heterogeneous group of rare diseases characterized by autoimmune activity against more than one endocrine organ, although non-endocrine organs can be affected.",
        "symptoms": ["edema", "asthenia", "fever", "urticaria", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Autoimmune_polyendocrine_syndrome"
    },
    "Dyskeratosis congenita": {
        "summary": "Dyskeratosis congenita (DKC), also called Zinsser-Cole-Engman syndrome,:570 is a rare progressive congenital disorder with a highly variable phenotype. The entity was classically defined by the triad of abnormal skin pigmentation, nail dystrophy, and leukoplakia of the oral mucosa, but these components do not always occur. DKC is characterized by short telomeres. Some of the manifestations resemble premature aging (similar to progeria). The disease initially mainly affects the skin, but a major consequence is progressive bone marrow failure which occurs in over 80%, causing early mortality.",
        "symptoms": ["edema", "blindness", "scoliosis", "learning difficulties", "alopecia", "dysuria", "myopathy", "urticaria", "hyperpigmentation", "ataxia", "bleeding", "cirrhosis", "gas", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Dyskeratosis_congenita"
    },
    "Pick's disease": {
        "summary": "Pick's disease, is a term that can be used in two different ways. It has traditionally been used as a term for a group of neurodegenerative diseases with symptoms attributable to frontal and temporal lobe dysfunction. Common symptoms that are noticed early on are personality and emotional changes, as well as, deterioration of language. This condition is now more commonly called frontotemporal dementia by professionals, and the use of Pick's disease as a clinical diagnosis has fallen out of fashion. The second use of the term (and the one now used among professionals) is to mean a specific pathology that is one of the causes of frontotemporal lobar degeneration. These two uses have previously led to confusion among professionals and patients and so its use should be restricted to the specific pathological subtype described below. It is also known as Pick disease and PiD (not to be confused with pelvic inflammatory disease (PID) or Parkinson's disease (PD)). A defining characteristic of the disease is build-up of tau proteins in neurons, accumulating into silver-staining, spherical aggregations known as \"Pick bodies\".",
        "symptoms": ["edema", "phobia", "aphasia", "seizure", "anxiety", "agoraphobia", "insomnia", "substance abuse", "panic attack", "headache", "memory loss", "sleep apnea", "overdose", "gas", "confusion", "claustrophobia", "abscess", "asthenia", "inflammation", "depressed", "hypotension", "delusion", "drug abuse", "dyspareunia", "akathisia", "mania", "hypoventilation", "sleep disorders", "depression", "cataplexy", "tremor", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Pick%27s_disease"
    },
    "Hepatic veno-occlusive disease": {
        "summary": "Hepatic veno-occlusive disease or veno-occlusive disease (VOD) is a condition in which some of the small veins in the liver are obstructed. It is a complication of high-dose chemotherapy given before a bone marrow transplant (BMT) and is marked by weight gain due to fluid retention, increased liver size, and raised levels of bilirubin in the blood. The name sinusoidal obstruction syndrome is now preferred if VOD happens as a result of chemotherapy or bone marrow transplantation.",
        "symptoms": ["dyspepsia", "steatorrhea", "bleeding", "jaundice", "abscess", "cirrhosis", "inflammation", "constipation", "melena", "claudication", "hypotension", "liver failure", "ptosis", "weight gain", "gas"],
        "url": "https://en.wikipedia.org/wiki/Hepatic_veno-occlusive_disease"
    },
    "Dupuytren's contracture": {
        "summary": "Dupuytren's contracture (also known as Dupuytren's disease, or by the slang term \"Viking disease\") is a flexion contracture of the hand due to a palmar fibromatosis, in which the fingers bend towards the palm and cannot be fully extended (straightened). It is an inherited proliferative connective tissue disorder that involves the hand's palmar fascia. It is named after Baron Guillaume Dupuytren, the surgeon who described an operation to correct the affliction.",
        "symptoms": ["aching", "edema", "joint stiffness", "trauma", "puncture wound", "itching"],
        "url": "https://en.wikipedia.org/wiki/Dupuytren%27s_contracture"
    },
    "Salla disease": {
        "summary": "Salla disease (SD), also called sialic acid storage disease or Finnish type sialuria, is an autosomal recessive lysosomal storage disease characterized by early physical impairment and mental retardation. It was first described in 1979, after Salla, a municipality in Finnish Lapland. Salla disease is one of 40 Finnish heritage diseases and affects approximately 130 individuals, mainly from Finland and Sweden.",
        "symptoms": ["seizure", "nystagmus", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Salla_disease"
    },
    "Rare Diseases Clinical Research Network": {
        "summary": "The Rare Diseases Clinical Research Network (RDCRN) is an initiative of the Office of Rare Diseases Research (ORDR). RDCRN is funded by the ORDR, the National Center for Advancing Translational Sciences and collaborating institute centers. The RDCRN is designed to advance medical research on rare diseases by providing support for clinical studies and facilitating collaboration, study enrollment and data sharing. Through the RDCRN consortia, physician scientists and their multidisciplinary teams work together with patient advocacy groups to study more than 200 rare diseases at sites across the nation.",
        "symptoms": ["gas"],
        "url": "https://en.wikipedia.org/wiki/Rare_Diseases_Clinical_Research_Network"
    },
    "Facioscapulohumeral muscular dystrophy": {
        "summary": "Facioscapulohumeral muscular dystrophy (FSHMD, FSHD or FSH)\u2014originally named Landouzy-Dejerine\u2014is a usually autosomal dominant inherited form of muscular dystrophy (MD) that initially affects the skeletal muscles of the face (facio), scapula (scapulo) and upper arms (humeral). FSHD is the third most common genetic disease of skeletal muscle. Orpha.net lists the prevalence as 4/100,000 while a 2014 population-based study in the Netherlands reported a significantly higher prevalence of 12 in 100,000.",
        "symptoms": ["weakness", "asthenia", "hearing loss", "depressed", "muscle weakness", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Facioscapulohumeral_muscular_dystrophy"
    },
    "Huntington's disease-like syndrome": {
        "summary": "The Huntington's disease-like syndromes (often abbreviated as HD-like or HDL syndromes) are a family of inherited neurodegenerative diseases that closely resemble Huntington's disease (HD) in that they typically produce a combination of chorea, cognitive decline or dementia and behavioural or psychiatric problems.",
        "symptoms": ["ataxia", "psychiatric problem"],
        "url": "https://en.wikipedia.org/wiki/Huntington%27s_disease-like_syndrome"
    },
    "EEM syndrome": {
        "summary": "EEM syndrome (or Ectodermal dysplasia, Ectrodactyly and Macular dystrophy syndrome) is an autosomal recessive congenital malformation disorder affecting tissues associated with the ectoderm (skin, hair, nails, teeth), and also the hands, feet and eyes.",
        "symptoms": ["edema", "urticaria", "deformity"],
        "url": "https://en.wikipedia.org/wiki/EEM_syndrome"
    },
    "Adult-onset Still's disease": {
        "summary": "Adult-onset Still's disease (AOSD) is a rare systemic inflammatory disease characterized by the classic triad of persistent high spiking fevers, joint pain, and a distinctive salmon-colored bumpy rash. The disease is considered a diagnosis of exclusion. Levels of the iron-binding protein ferritin may be elevated with this disorder. AOSD may present in a similar manner to other inflammatory diseases and to autoimmune diseases, which must be ruled out before making the diagnosis. Prognosis is usually favorable but manifestations of the disease affecting the lungs, heart, or kidney may occasionally cause severe life-threatening complications. It is treated first with steroids such as prednisone. Drugs that block the action of interleukin-1, particularly IL-1\u03b2, are effective treatments.[citation needed]",
        "symptoms": ["joint pain", "sore throat", "swollen lymph nodes", "swelling", "inflammation", "hearing loss", "rash", "fever", "bleeding", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Adult-onset_Still%27s_disease"
    },
    "Roberts syndrome": {
        "summary": "Roberts syndrome, or sometimes called pseudothalidomide syndrome, is an extremely rare genetic disorder that is characterized by mild to severe prenatal retardation or disruption of cell division, leading to malformation of the bones in the skull, face, arms, and legs.",
        "symptoms": ["exophthalmos", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Roberts_syndrome"
    },
    "Capillary leak syndrome": {
        "summary": "Capillary leak syndrome (also known as systemic capillary leak syndrome, SCLS, or Clarkson\u2019s disease) is an extremely rare medical condition characterized by self-reversing episodes during which the endothelial cells which line the capillaries are thought to separate for a few days, allowing for a leakage of fluid from the circulatory system to the interstitial space, resulting in a dangerous hypotension (low blood pressure), hemoconcentration, and hypoalbuminemia. It is a life-threatening illness because each episode has the potential to cause damage to, or the failure of, vital organs due to limited perfusion. It is often misdiagnosed as polycythemia, polycythemia vera, or sepsis.",
        "symptoms": ["edema", "weakness", "dyspnea", "syncope", "polyuria", "swelling", "runny nose", "inflammation", "dehydration", "low blood pressure", "rash", "vomiting", "general weakness", "claudication", "hypotension", "fatigue", "lightheaded", "gas"],
        "url": "https://en.wikipedia.org/wiki/Capillary_leak_syndrome"
    },
    "Brunner syndrome": {
        "summary": "Brunner syndrome is a rare genetic disorder associated with a mutation in the MAOA gene. It is characterized by lower than average IQ (typically about 85), problematic impulsive behavior (such as arson, hypersexuality and violence), sleep disorders and mood swings. It was identified in fourteen males from one family in 1993. It has since been discovered in two additional families.",
        "symptoms": ["sleep disorders", "aggression", "blindness", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Brunner_syndrome"
    },
    "Haemolacria": {
        "summary": "Haemolacria is a physical condition that causes a person to produce tears that are partially composed of blood. It can manifest as tears that are anything from merely red-tinged to appearing to be entirely made of blood.",
        "symptoms": ["rash", "bleeding", "cough"],
        "url": "https://en.wikipedia.org/wiki/Haemolacria"
    },
    "Pre-eclampsia": {
        "summary": "Pre-eclampsia (PE) is a disorder of pregnancy characterized by the onset of high blood pressure and often a significant amount of protein in the urine. The condition begins after 20 weeks of pregnancy. In severe disease there may be red blood cell breakdown, a low blood platelet count, impaired liver function, kidney dysfunction, swelling, shortness of breath due to fluid in the lungs, or visual disturbances. Pre-eclampsia increases the risk of poor outcomes for both the mother and the baby. If left untreated, it may result in seizures at which point it is known as eclampsia.",
        "symptoms": ["edema", "seizure", "swelling", "high blood pressure", "inflammation", "visual disturbances", "obesity", "convulsions", "vomiting", "abdominal pain", "shortness of breath", "depression", "fever", "headache", "urticaria", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Pre-eclampsia"
    },
    "Cyclic vomiting syndrome": {
        "summary": "Cyclic vomiting syndrome (US English) or cyclical vomiting syndrome (UK English) (CVS) is a chronic functional condition of unknown etiology characterised by recurring attacks of intense nausea, vomiting, and sometimes abdominal pain, headaches, or migraines. CVS typically develops during childhood, usually between ages 3 and 7; although it often remits during adolescence, it can persist into adult life.",
        "symptoms": ["dyspepsia", "steatorrhea", "weakness", "bleeding", "abscess", "nausea", "cirrhosis", "constipation", "dehydration", "melena", "irritation", "vomiting", "headache", "abdominal pain", "liver failure", "ptosis", "fatigue", "gas"],
        "url": "https://en.wikipedia.org/wiki/Cyclic_vomiting_syndrome"
    },
    "Laryngeal papillomatosis": {
        "summary": "Laryngeal papillomatosis, also known as recurrent respiratory papillomatosis or glottal papillomatosis or associated with condyloma acuminata, is a rare medical condition (2 per 100,000 adults and 4.5 per 100,000 children),:411 caused by a human papillomavirus (HPV) infection of the throat.:411 Laryngeal papillomatosis causes assorted tumors or papillomas to develop over a period of time. Without treatment it is potentially fatal as uncontrolled growths could obstruct the airway. Laryngeal papillomatosis is caused by HPV types 6 and 11, in which benign tumors form on the larynx or other areas of the respiratory tract. These tumors can recur frequently, may require repetitive surgery, and may interfere with breathing. The disease can be treated with surgery and antivirals. In addition antiangiogenic therapy shows promising results.",
        "symptoms": ["noisy breathing", "deafness", "dizziness", "fever", "headache", "cough", "gas"],
        "url": "https://en.wikipedia.org/wiki/Laryngeal_papillomatosis"
    },
    "Atelosteogenesis, type II": {
        "summary": "Atelosteogenesis, type II is a severe disorder of cartilage and bone development. It is extremely rare, and infants with the disorder are usually stillborn; however, those who survive birth die soon after from respiratory failure.",
        "symptoms": ["ataxia"],
        "url": "https://en.wikipedia.org/wiki/Atelosteogenesis,_type_II"
    },
    "Villoglandular adenocarcinoma of the cervix": {
        "summary": "Villoglandular adenocarcinoma of the cervix, also villoglandular papillary adenocarcinoma, papillary villoglandular adenocarcinoma and well-differentiated villoglandular adenocarcinoma, abbreviated VGA, is a rare type of cervical cancer that, in relation to other cervical cancers, is typically found in younger women and has a better prognosis.",
        "symptoms": ["dyspareunia", "bleeding"],
        "url": "https://en.wikipedia.org/wiki/Villoglandular_adenocarcinoma_of_the_cervix"
    },
    "Leukocyte adhesion deficiency-1": {
        "summary": "Leukocyte adhesion deficiency-1 (LAD1) is a rare and often fatal genetic disorder in humans.",
        "symptoms": ["asthenia", "fever", "gas"],
        "url": "https://en.wikipedia.org/wiki/Leukocyte_adhesion_deficiency-1"
    },
    "Subacute sclerosing panencephalitis": {
        "summary": "Subacute sclerosing panencephalitis (SSPE) also known as Dawson Disease, Dawson encephalitis, and measles encephalitis is a rare and chronic form of progressive brain inflammation caused by a persistent infection with measles virus (which can be a result of a mutation of the virus itself). The condition primarily affects children and young adults. It has been estimated that about 1 in 10,000 people infected with measles will eventually develop SSPE. However, a 2016 study estimated that the rate for babies who contracted measles was as high as 1 in 609. No cure for SSPE exists and the condition is often fatal. However, SSPE can be managed by medication if treatment is started at an early stage. Much of the work on SSPE has been performed by the National Institute of Neurological Disorders and Stroke (NINDS).",
        "symptoms": ["blindness", "seizure", "inflammation", "convulsions", "ataxia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Subacute_sclerosing_panencephalitis"
    },
    "Sotos syndrome": {
        "summary": "Sotos syndrome (cerebral gigantism or Sotos-Dodge syndrome) is a rare genetic disorder characterized by excessive physical growth during the first years of life. Excessive growth often starts in infancy and continues into the early teen years. The disorder may be accompanied by autism, mild intellectual disability, delayed motor, cognitive, and social development, hypotonia (low muscle tone), and speech impairments. Children with Sotos syndrome tend to be large at birth and are often taller, heavier, and have relatively large skulls (macrocephaly) than is normal for their age. Signs of the disorder, which vary among individuals, include a disproportionately large skull with a slightly protrusive forehead, large hands and feet, large mandible, hypertelorism (an abnormally increased distance between the eyes)(large inter-pupillary distance), and downslanting eyes. Clumsiness, an awkward gait, and unusual aggressiveness or irritability may also occur. Although most cases of Sotos syndrome occur sporadically, familial cases have also been reported. It is similar to Weaver syndrome.",
        "symptoms": ["edema", "phobia", "hyperactivity", "jaundice", "seizure", "scoliosis", "hearing loss", "irritability", "gas"],
        "url": "https://en.wikipedia.org/wiki/Sotos_syndrome"
    },
    "Oculopharyngeal muscular dystrophy": {
        "summary": "Oculopharyngeal muscular dystrophy (OPMD) is a rare form of muscular dystrophy with symptoms generally starting when an individual is 40 to 50 years old. It can be autosomal dominant neuromuscular disease or autosomal recessive. The most common inheritance of OPMD is autosomal dominant, which means only one copy of the mutated gene needs to be present in each cell. Children of an affected parent have a 50% chance of inheriting the mutant gene.",
        "symptoms": ["weakness", "asthenia", "myopathy", "ptosis", "paralysis", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Oculopharyngeal_muscular_dystrophy"
    },
    "MORM syndrome": {
        "summary": "",
        "symptoms": ["obesity", "rash", "sleep apnea"],
        "url": "https://en.wikipedia.org/wiki/MORM_syndrome"
    },
    "Krabbe disease": {
        "summary": "Krabbe disease (also known as globoid cell leukodystrophy or galactosylceramide lipidosis) is a rare, often fatal degenerative disorder that affects the myelin sheath of the nervous system. It is a form of sphingolipidosis, as it involves dysfunctional metabolism of sphingolipids. This condition is inherited in an autosomal recessive pattern. The disease is named after the Danish neurologist Knud Krabbe (1885\u20131965).",
        "symptoms": ["edema", "weakness", "aphasia", "seizure", "fever", "insomnia", "headache", "muscle weakness", "irritability", "sleep apnea", "blindness", "deafness", "abscess", "inflammation", "vomiting", "hypotension", "paralysis", "weight loss", "akathisia", "hypoventilation", "sleep disorders", "cataplexy", "tremor", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Krabbe_disease"
    },
    "Tracheobronchomegaly": {
        "summary": "Mounier-Kuhn syndrome (also called tracheobronchomegaly) is a very rare congenital disorder of the lung primarily characterized by an abnormal widening of the upper airways. The abnormally widened trachea and mainstem bronchi are associated with recurrent lower respiratory tract infection and copious purulent sputum production, eventually leading to bronchiectasis and other respiratory complications.",
        "symptoms": ["sputum production"],
        "url": "https://en.wikipedia.org/wiki/Tracheobronchomegaly"
    },
    "Gonadotropin-releasing hormone insensitivity": {
        "summary": "Gonadotropin-releasing hormone (GnRH) insensitivity is a rare autosomal recessive genetic and endocrine syndrome which is characterized by inactivating mutations of the gonadotropin-releasing hormone receptor (GnRHR) and thus an insensitivity of the receptor to gonadotropin-releasing hormone (GnRH), resulting in a partial or complete loss of the ability of the gonads to synthesize the sex hormones. The condition manifests itself as isolated hypogonadotropic hypogonadism (IHH), presenting with symptoms such as delayed, reduced, or absent puberty, low or complete lack of libido, and infertility, and is the predominant cause of IHH when it does not present alongside anosmia.",
        "symptoms": ["edema", "asthenia", "rash", "infertility", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Gonadotropin-releasing_hormone_insensitivity"
    },
    "Inborn errors of steroid metabolism": {
        "summary": "An inborn error of steroid metabolism is an inborn error of metabolism due to defects in steroid metabolism.",
        "symptoms": ["edema", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Inborn_errors_of_steroid_metabolism"
    },
    "Cleidocranial dysostosis": {
        "summary": "Cleidocranial dysostosis (CCD), also called cleidocranial dysplasia, is a congenital disorder, that mostly affects the development of bones and teeth. The collarbones are typically either poorly developed or absent, which often allows the shoulders to be brought close together. The front of the skull often does not close until later and those affected are often short. Other symptoms may include a prominent forehead, wide set eyes, abnormal teeth, and a flat nose. Symptoms can vary between people; however, intelligence is typically normal.",
        "symptoms": ["edema", "deformity", "swelling", "scoliosis", "numbness", "irritation", "hearing loss", "rash"],
        "url": "https://en.wikipedia.org/wiki/Cleidocranial_dysostosis"
    },
    "Birt\u2013Hogg\u2013Dub\u00e9 syndrome": {
        "summary": "Birt\u2013Hogg\u2013Dub\u00e9 syndrome (BHD), also Hornstein\u2013Birt\u2013Hogg\u2013Dub\u00e9 syndrome, Hornstein\u2013Knickenberg syndrome, and fibrofolliculomas with trichodiscomas and acrochordons is a human autosomal dominant genetic disorder that can cause susceptibility to kidney cancer, renal and pulmonary cysts, and noncancerous tumors of the hair follicles, called fibrofolliculomas. The symptoms seen in each family are unique, and can include any combination of the three symptoms. Fibrofolliculomas are the most common manifestation, found on the face and upper trunk in over 80% of people with BHD over the age of 40. Pulmonary cysts are equally common (84%), but only 24% of people with BHD eventually experience a collapsed lung (spontaneous pneumothorax). Kidney tumors, both cancerous and benign, occur in 14\u201334% of people with BHD; the associated kidney cancers are often rare hybrid tumors.",
        "symptoms": ["skin lesion", "gas"],
        "url": "https://en.wikipedia.org/wiki/Birt%E2%80%93Hogg%E2%80%93Dub%C3%A9_syndrome"
    },
    "Ch\u00e9diak\u2013Higashi syndrome": {
        "summary": "Ch\u00e9diak\u2013Higashi syndrome is a rare autosomal recessive disorder that arises from a mutation of a lysosomal trafficking regulator protein, which leads to a decrease in phagocytosis. The decrease in phagocytosis results in recurrent pyogenic infections, albinism and peripheral neuropathy. It occurs in humans, cattle, blue Persian cats, Australian blue rats, mice, mink, foxes, and the only known captive albino orca.",
        "symptoms": ["phobia", "bleeding", "deafness", "abscess", "inflammation", "fever", "hyperpigmentation", "ataxia", "frequent infection", "gas"],
        "url": "https://en.wikipedia.org/wiki/Ch%C3%A9diak%E2%80%93Higashi_syndrome"
    },
    "Ablepharon macrostomia syndrome": {
        "summary": "Ablepharon macrostomia syndrome (AMS) is an extremely rare autosomal recessive genetic disorder characterized by malformations of the skull, skin, fingers and genitals. Affected individuals may also have malformations of the nipples and abdominal wall.",
        "symptoms": ["edema", "gas", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Ablepharon_macrostomia_syndrome"
    },
    "Penile agenesis and testicular agenesis": {
        "summary": "Penile agenesis is a birth defect in humans, occurring about once in 5\u20136 million male births, in which a male child is born without a penis. A partner condition is testicular or gonadal agenesis. This is when a male child is born without gonads and consequently develops no testes. Penile agenesis occurs often as a consequence of Testicular agenesis, but the reverse is never the case. Most patients in both cases have no known family history and usually have an otherwise normal male anatomy.",
        "symptoms": ["irritation"],
        "url": "https://en.wikipedia.org/wiki/Penile_agenesis_and_testicular_agenesis"
    },
    "Naegeli\u2013Franceschetti\u2013Jadassohn syndrome": {
        "summary": "Naegeli\u2013Franceschetti\u2013Jadassohn syndrome (NFJS), also known as chromatophore nevus of Naegeli and Naegeli syndrome, is a rare autosomal dominant form of ectodermal dysplasia, characterized by reticular skin pigmentation, diminished function of the sweat glands, the absence of teeth and hyperkeratosis of the palms and soles. One of the most striking features is the absence of fingerprint lines on the fingers.",
        "symptoms": ["edema", "urticaria", "hyperpigmentation", "ataxia", "cirrhosis", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Naegeli%E2%80%93Franceschetti%E2%80%93Jadassohn_syndrome"
    },
    "Succinic semialdehyde dehydrogenase deficiency": {
        "summary": "Succinic semialdehyde dehydrogenase deficiency (SSADHD), also known as 4-hydroxybutyric aciduria or gamma-hydroxybutyric aciduria, is a rare autosomal recessive disorder of the degradation pathway of the inhibitory neurotransmitter \u03b3-aminobutyric acid, or GABA. The disorder has been identified in approximately 350 families, with a significant proportion being consanguineous families. The first case was identified in 1981 and published in a Dutch clinical chemistry journal that highlighted a person with a number of neurological conditions such as delayed intellectual, motor, speech, and language as the most common manifestations. Later cases reported in the early 1990s began to show that hypotonia, hyporeflexia, seizures, and a nonprogressive ataxia were frequent clinical features as well.",
        "symptoms": ["edema", "seizure", "lethargy", "nystagmus", "apraxia", "ataxia", "somnolence", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Succinic_semialdehyde_dehydrogenase_deficiency"
    },
    "Abetalipoproteinemia": {
        "summary": "Abetalipoproteinemia, or Bassen-Kornzweig syndrome, is a rare autosomal recessive disorder that interferes with the normal absorption of fat and fat-soluble vitamins from food. It is caused by a mutation in microsomal triglyceride transfer protein resulting in deficiencies in the apolipoproteins B-48 and B-100, which are used in the synthesis and exportation of chylomicrons and VLDL respectively. It is not to be confused with familial dysbetalipoproteinemia.",
        "symptoms": ["steatorrhea", "muscle weakness", "blindness", "weakness", "slurred speech", "scoliosis", "protruding abdomen", "ataxia", "pale stools"],
        "url": "https://en.wikipedia.org/wiki/Abetalipoproteinemia"
    },
    "Mucormycosis": {
        "summary": "Mucormycosis is any fungal infection caused by fungi in the order Mucorales.:328 Generally, species in the Mucor, Rhizopus, Absidia, and Cunninghamella genera are most often implicated.",
        "symptoms": ["blindness", "trauma", "difficulty breathing", "nausea", "swelling", "fever", "vomiting", "headache", "abdominal pain", "eye swelling", "nasal congestion", "cirrhosis", "cough", "gas"],
        "url": "https://en.wikipedia.org/wiki/Mucormycosis"
    },
    "Premature thelarche": {
        "summary": "Premature thelarche is a rare medical condition that is characterized by isolated breast development (thelarche being the onset of breast development) at a very early age with no other signs of sexual maturation. It generally occurs within the first 1 to 4 years of life, with a peak incidence of 2 years of age, and tends to resolve within 1 to 2 years without treatment. The condition never advances beyond Tanner stage III breast development.",
        "symptoms": ["edema", "nipple discharge", "abscess", "ptosis", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Premature_thelarche"
    },
    "Upshaw\u2013Schulman syndrome": {
        "summary": "Upshaw\u2013Schulman syndrome (USS) is the recessively inherited form of thrombotic thrombocytopenic purpura (TTP), a rare and complex blood coagulation disease. USS is caused by the absence of the ADAMTS13 protease resulting in the persistence of unusually large von Willebrand factor multimers (ULVWF), causing episodes of acute thrombotic microangiopathy with disseminated multiple small vessel obstructions. These obstructions deprive downstream tissues from blood and oxygen, which can result in tissue damage and death. The presentation of an acute USS episode is variable but usually associated with thrombocytopenia, microangiopathic hemolytic anemia (MAHA) with schistocytes on the peripheral blood smear, fever and signs of ischemic organ damage in the brain, kidney and heart.",
        "symptoms": ["boil", "mania", "jaundice", "abscess", "asthenia", "seizure", "cirrhosis", "insect bite", "visual problems", "rash", "fever", "malaise", "headache", "urticaria", "hyperpigmentation", "fatigue", "alopecia", "blister"],
        "url": "https://en.wikipedia.org/wiki/Upshaw%E2%80%93Schulman_syndrome"
    },
    "Antisynthetase syndrome": {
        "summary": "Anti-synthetase syndrome is a rare medical syndrome associated with interstitial lung disease, dermatomyositis, and polymyositis and other autoimmune diseases.",
        "symptoms": ["fever", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Antisynthetase_syndrome"
    },
    "Glassy cell carcinoma of the cervix": {
        "summary": "Glassy cell carcinoma of the cervix, also glassy cell carcinoma, is a rare aggressive malignant tumour of the uterine cervix. The tumour gets its name from its microscopic appearance; its cytoplasm has a glass-like appearance.",
        "symptoms": ["dyspareunia", "bleeding"],
        "url": "https://en.wikipedia.org/wiki/Glassy_cell_carcinoma_of_the_cervix"
    },
    "Treacher Collins syndrome": {
        "summary": "Treacher Collins syndrome (TCS) is an autosomal dominant congenital disorder characterized by craniofacial deformities, involving the ears, eyes, cheekbones, and jawbone. Those affected have normal intelligence.:577 The typical physical features include downward-slanting eyes, micrognathia (a small lower jaw), conductive hearing loss, underdeveloped zygomatic bones, drooping part of the lateral lower eyelids, and malformed or absent ears, but they can vary dramatically between affected people. These physical features can cause problems breathing, hearing, and seeing.",
        "symptoms": ["speech problem", "deformity", "scoliosis", "hearing loss", "breathing problems", "ataxia", "ptosis", "sleep apnea", "gas"],
        "url": "https://en.wikipedia.org/wiki/Treacher_Collins_syndrome"
    },
    "Pallister\u2013Killian syndrome": {
        "summary": "Pallister\u2013Killian syndrome (also tetrasomy 12p mosaicism or Pallister mosaic aneuploidy syndrome) is an extremely rare genetic disorder occurring in humans. Pallister-Killian occurs due to the presence of the anomalous extra isochromosome 12p, the short arm of the twelfth chromosome. This leads to the development of tetrasomy 12p. Because not all cells have the extra isochromosome, Pallister-Killian is a mosaic condition (more readily detected in skin fibroblasts).",
        "symptoms": ["gas", "hyperpigmentation"],
        "url": "https://en.wikipedia.org/wiki/Pallister%E2%80%93Killian_syndrome"
    },
    "Menkes disease": {
        "summary": "Menkes disease (MNK), also known as Menkes syndrome, is an X-linked recessive disorder that affects copper levels in the body, leading to copper deficiency. The onset of Menkes disease typically begins during infancy, affecting about 1 in 100,000 to 250,000 newborns. Infants with MNK syndrome often do not live past the age of 3. It is more common in males than females, because it only takes one copy of the X-linked recessive gene to be expressed for a male to develop the disease. In order for females to develop the disorder they would need to express two copies of the gene, one on each X chromosome to develop the disorder. MNK is characterized by kinky hair, growth failure, and deterioration of the nervous system. It is caused by mutations in the copper transport gene, ATP7A, which is responsible for making a protein that is important for regulating the copper levels in the body.",
        "symptoms": ["seizure", "blindness", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Menkes_disease"
    },
    "Epidermodysplasia verruciformis": {
        "summary": "Epidermodysplasia verruciformis (EV, also called Lewandowsky\u2013Lutz dysplasia), colloquially known as tree man illness is an extremely rare autosomal recessive genetic hereditary skin disorder associated with a high risk of carcinoma of the skin. It is characterized by abnormal susceptibility to human papillomaviruses (HPVs) of the skin. The resulting uncontrolled HPV infections result in the growth of scaly macules and papules, particularly on the hands and feet. It is typically associated with HPV types 5 and 8, which are found in about 80% of the normal population as asymptomatic infections, although other types may also contribute.",
        "symptoms": ["fever", "oral lesions", "mania", "skin lesion"],
        "url": "https://en.wikipedia.org/wiki/Epidermodysplasia_verruciformis"
    },
    "Retinoblastoma": {
        "summary": "Retinoblastoma (Rb) is a rare form of cancer that rapidly develops from the immature cells of a retina, the light-detecting tissue of the eye. It is the most common malignant cancer of the eye in children, and it is almost exclusively found in young children.",
        "symptoms": ["red eye", "edema", "ptosis", "mania", "trauma"],
        "url": "https://en.wikipedia.org/wiki/Retinoblastoma"
    },
    "Harlequin-type ichthyosis": {
        "summary": "Harlequin-type ichthyosis is a very rare severe genetic disease, which causes thickening of the skin. At birth, the child\u2019s whole body is encased in an 'armor' of thick white plates of skin, separated by deep cracks. In addition, the eyes, ears, penis, and limbs may be abnormally contracted. Because of resultant cracked skin in locations where normal skin would fold, it is easily pregnable by bacteria and other contaminants, which can result in serious risk of fatal infection.",
        "symptoms": ["aching", "edema", "dry skin", "hypoventilation", "dehydration", "urticaria", "alopecia", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Harlequin-type_ichthyosis"
    },
    "Denys\u2013Drash syndrome": {
        "summary": "Denys\u2013Drash syndrome (DDS) or Drash syndrome is a rare disorder or syndrome characterized by gonadal dysgenesis, nephropathy, and Wilms' tumor.",
        "symptoms": ["edema", "constipation", "rash", "abdominal pain", "insomnia", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Denys%E2%80%93Drash_syndrome"
    },
    "Nail\u2013patella syndrome": {
        "summary": "Nail\u2013patella syndrome (NPS) (also known as \"HOOD syndrome\") is a genetic disorder that results in small, poorly developed nails and kneecaps, but can also affect many other areas of the body, such as the elbows, chest, and hips. The name \"nail\u2013patella\" can be very misleading because the syndrome often affects many other areas of the body, including even the production of certain proteins.:666 Those affected by NPS may have one or more affected areas of the body, and its severity varies depending on the individual. It is also referred to as iliac horn syndrome, hereditary onychoosteodysplasia (HOOD syndrome), Fong disease or Turner\u2013Kieser syndrome.",
        "symptoms": ["joint pain", "edema", "hyperactivity", "scoliosis", "rash", "gas"],
        "url": "https://en.wikipedia.org/wiki/Nail%E2%80%93patella_syndrome"
    },
    "Prader\u2013Willi syndrome": {
        "summary": "Prader\u2013Willi syndrome (PWS) is a genetic disorder due to loss of function of specific genes. In newborns symptoms include weak muscles, poor feeding, and slow development. In childhood the person becomes constantly hungry which often leads to obesity and type 2 diabetes. There is also typically mild to moderate intellectual impairment and behavioral problems. Often the forehead is narrow, hands and feet small, height short, skin light in color, and they are unable to have children.",
        "symptoms": ["edema", "hallucination", "paranoia", "lethargy", "scoliosis", "anxiety", "sleep disorders", "obesity", "psychiatric problem", "depression", "weight gain", "cataplexy", "infertility", "sleep apnea", "gas"],
        "url": "https://en.wikipedia.org/wiki/Prader%E2%80%93Willi_syndrome"
    },
    "Sarcoidosis": {
        "summary": "Sarcoidosis is a disease involving abnormal collections of inflammatory cells that form lumps known as granulomas. The disease usually begins in the lungs, skin, or lymph nodes. Less commonly affected are the eyes, liver, heart, and brain. Any organ, however, can be affected. The signs and symptoms depend on the organ involved. Often there are no, or only mild, symptoms. When it affects the lungs there may be wheezing, cough, shortness of breath, or chest pain. Some may have L\u00f6fgren syndrome in which there is fever, large lymph nodes, arthritis, and a rash known as erythema nodosum.",
        "symptoms": ["joint pain", "edema", "hair loss", "weakness", "blurry vision", "nausea", "fever", "cough", "painful skin", "jaundice", "swelling", "itchiness", "headache", "chest pain", "muscle weakness", "gas", "myopathy", "blindness", "skin lesion", "inflammation", "tachycardia", "wheezing", "vomiting", "infertility", "paralysis", "weight loss", "lack of energy", "alopecia", "dry mouth", "mania", "deformity", "arrhythmia", "rash", "shortness of breath", "myalgia", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Sarcoidosis"
    },
    "Keratolytic winter erythema": {
        "summary": "Keratolytic Winter erythema (KWE), also known as erythrokeratolysis hiemalis, Oudtshoorn disease and Oudtshoorn skin, is a rare autosomal dominant skin disease of unknown etiology which causes erythema (redness) and keratolysis (peeling) of the skin on the palms and soles. Onset, increased prominence and severity usually occurs during winter. It is a type of genodermatosis.",
        "symptoms": ["irritation", "edema", "urticaria", "inflammation"],
        "url": "https://en.wikipedia.org/wiki/Keratolytic_winter_erythema"
    },
    "Langerhans cell histiocytosis": {
        "summary": "Langerhans cell histiocytosis (LCH) is a rare disease involving clonal proliferation of Langerhans cells, abnormal cells deriving from bone marrow and capable of migrating from skin to lymph nodes. Clinically, its manifestations range from isolated bone lesions to multisystem disease. LCH is part of a group of clinical syndromes called histiocytoses, which are characterized by an abnormal proliferation of histiocytes (an archaic term for activated dendritic cells and macrophages). These diseases are related to other forms of abnormal proliferation of white blood cells, such as leukemias and lymphomas.",
        "symptoms": ["boil", "mania", "skin lesion", "abscess", "swelling", "lethargy", "insect bite", "rash", "shortness of breath", "fever", "urticaria", "alopecia", "hyperpigmentation", "blister", "cough", "gas", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Langerhans_cell_histiocytosis"
    },
    "X-linked hypophosphatemia": {
        "summary": "ped/1128 article/922305",
        "symptoms": ["blindness", "deformity", "hearing loss", "rash", "bone deformity", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/X-linked_hypophosphatemia"
    },
    "Jackson\u2013Weiss syndrome": {
        "summary": "Jackson\u2013Weiss syndrome is inherited in an autosomal dominant pattern.",
        "symptoms": ["asthenia", "trauma", "ptosis", "infertility", "gas"],
        "url": "https://en.wikipedia.org/wiki/Jackson%E2%80%93Weiss_syndrome"
    },
    "Reticular dysgenesis": {
        "summary": "Reticular dysgenesis (RD) is a rare, inherited autosomal recessive disease that results in immunodeficiency. Individuals with RD have mutations in both copies of the AK2 gene. Mutations in this gene lead to absence of AK2 protein. AK2 protein allows hematopoietic stem cells to differentiate and proliferate. Hematopoietic stem cells give rise to blood cells.",
        "symptoms": ["dehydration", "rash", "skin rash", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Reticular_dysgenesis"
    },
    "Loeys\u2013Dietz syndrome": {
        "summary": "Loeys\u2013Dietz syndrome (LDS) is an autosomal dominant genetic connective tissue disorder. The disorder is marked by aneurysms in the aorta, often in children. The aorta may also undergo sudden dissection in the weakened layers of the wall of aorta. Aneurysms and dissections also can occur in arteries other than the aorta. Because aneurysms in children tend to rupture early, children are at greater risk for dying if the syndrome is not identified. Surgery to repair aortic aneurysms is essential for treatment.",
        "symptoms": ["scoliosis", "leg pain", "gas", "asthenia"],
        "url": "https://en.wikipedia.org/wiki/Loeys%E2%80%93Dietz_syndrome"
    },
    "Laron syndrome": {
        "summary": "Laron's syndrome, or Laron-type dwarfism, is an autosomal recessive disorder characterized by an insensitivity to growth hormone (GH), usually caused by a mutant growth hormone receptor. It causes short stature and an increased sensitivity to insulin which means that they are less likely to develop diabetes mellitus type 2 and possibly cancer as well. It can be treated with injections of recombinant IGF-1.",
        "symptoms": ["edema", "mania", "asthenia", "seizure", "obesity", "depressed", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Laron_syndrome"
    },
    "Kufs disease": {
        "summary": "Kufs disease is one of many diseases categorized under a disorder known as neuronal ceroid lipofuscinosis (NCLs). NCLs are broadly described to create problems with vision, movement and cognitive function. Among all NCLs diseases, Kufs is the only one that does not affect vision, and although this is a distinguishing factor of Kufs, NCLs are typically differentiated by the age at which they appear in a patient",
        "symptoms": ["confusion", "seizure", "dysarthria", "tremors", "cuts", "tremor", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Kufs_disease"
    },
    "Congenital insensitivity to pain": {
        "summary": "Congenital insensitivity to pain (CIP), also known as congenital analgesia, is one or more rare conditions in which a person cannot feel (and has never felt) physical pain. The conditions described here are separate from the HSAN group of disorders, which have more specific signs and etiology. It is an extremely dangerous condition.",
        "symptoms": ["chronic pain", "deafness", "sore throat", "seizure", "paralysis", "hyperthermia", "headache", "odynophagia", "myalgia", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Congenital_insensitivity_to_pain"
    },
    "Sex-linked dystonia parkinsonism": {
        "summary": "X-linked dystonia parkinsonism (XDP), also known as Lubag Syndrome or X-linked Dystonia of Panay, is a rare x-linked progressive movement disorder with high penetrance found almost exclusively in males from the Panay, Philippines. It is characterized by dystonic movements first typically occurring in the 3rd and 4th decade of life. The dystonic movements often either coexist or develop into parkinsonism within 10 years of disease onset.",
        "symptoms": ["bradykinesia", "tremor"],
        "url": "https://en.wikipedia.org/wiki/Sex-linked_dystonia_parkinsonism"
    },
    "Syringomyelia": {
        "summary": "Syringomyelia (/s\u1d7b\u02ccr\u026a\u014b\u0261\u0259ma\u026a\u02c8i\u02d0li\u0259, -\u0261o\u028a-/) is a generic term referring to a disorder in which a cyst or cavity forms within the spinal cord. This cyst, called a syrinx, can expand and elongate over time, destroying the spinal cord. The damage may result in pain, paralysis, weakness, and stiffness in the back, shoulders, and extremities. Syringomyelia may also cause a loss of the ability to feel extremes of hot or cold, especially in the hands. There is also a disorder that generally leads to a cape-like pain (extreme pain, pressure, and many other painful symptoms in the area where a cape would be) and temperature sensation along the back and arms. Each patient experiences a different combination of symptoms. These symptoms typically vary depending on the extent and, often more critically, to the location of the syrinx within the spinal cord.",
        "symptoms": ["edema", "weakness", "aphasia", "seizure", "insomnia", "cough", "stabbing pain", "scoliosis", "numbness", "headache", "muscle weakness", "sleep apnea", "abscess", "inflammation", "hypotension", "paralysis", "akathisia", "chronic pain", "trauma", "hypoventilation", "sleep disorders", "cataplexy", "tremor", "ataxia", "sweating"],
        "url": "https://en.wikipedia.org/wiki/Syringomyelia"
    },
    "Fibrodysplasia ossificans progressiva": {
        "summary": "Fibrodysplasia ossificans progressiva (FOP) is an extremely rare connective tissue disease. The disease is caused by a mutation of the body's repair mechanism, which causes fibrous tissue (including muscle, tendon, and ligament) to be ossified spontaneously or when damaged. In many cases, injuries can cause joints to become permanently frozen in place. Surgical removal of the extra bone growths has been shown to cause the body to \"repair\" the affected area with even more bone.",
        "symptoms": ["muscle weakness", "weakness", "trauma", "inflammation", "muscle spasm", "myalgia", "ptosis", "loss of mobility", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Fibrodysplasia_ossificans_progressiva"
    },
    "Nijmegen breakage syndrome": {
        "summary": "Nijmegen breakage syndrome (NBS), also known as Berlin breakage syndrome, ataxia telangiectasia variant 1 (AT-V1) and Seemanova syndrome, is a rare autosomal recessive congenital disorder causing chromosomal instability, probably as a result of a defect in the double Holliday junction DNA repair mechanism and/or the synthesis dependent strand annealing mechanism for repairing double strand breaks in DNA (see Homologous recombination).",
        "symptoms": ["ataxia"],
        "url": "https://en.wikipedia.org/wiki/Nijmegen_breakage_syndrome"
    },
    "McGillivray syndrome": {
        "summary": "McGillivray syndrome is a very rare syndrome which is also known as a Craniosynostosis. It is characterized mainly by heart defects, skull and facial abnormalities and ambiguous genitalia. The symptoms of this syndrome are ventricular septal defect, patent ductus arteriosus, small jaw, undescended testes, and webbed fingers. Beside to these symptoms there are more symptoms which is related with bone structure and misshape. It was first recovered by modern understanding of craniosynostosis is referenced from the 1851 writings of Virchow. His understanding and descriptions of irregular calvarial growth patterns were the basis of the law of Virchow. The patients could be diagnosed by A misshapen skull, with the shape depending on which of the cranial sutures, slow or no growth of the head as the baby grows, development of a raised, hard ridge along affected sutures, and increased pressure within the skull (intracranial pressure). This could be cured by various surgeries.",
        "symptoms": ["trauma", "swelling", "intracranial pressure"],
        "url": "https://en.wikipedia.org/wiki/McGillivray_syndrome"
    },
    "Phenylketonuria": {
        "summary": "Phenylketonuria (PKU) is an inborn error of metabolism that results in decreased metabolism of the amino acid phenylalanine. Untreated PKU can lead to intellectual disability, seizures, behavioral problems, and mental disorder. It may also result in a musty smell and lighter skin. Babies born to mothers who have poorly treated PKU may have heart problems, a small head, and low birth weight.",
        "symptoms": ["hair loss", "hyperactivity", "nausea", "seizure", "headache", "malaise"],
        "url": "https://en.wikipedia.org/wiki/Phenylketonuria"
    },
    "Lesch\u2013Nyhan syndrome": {
        "summary": "Lesch\u2013Nyhan syndrome (LNS), also known as Nyhan syndrome and juvenile gout, is a rare inherited disorder caused by a deficiency of the enzyme hypoxanthine-guanine phosphoribosyltransferase (HGPRT), produced by mutations in the HPRT gene located on the X chromosome. LNS affects about one in 380,000 live births. The disorder was first recognized and clinically characterized by medical student Michael Lesch and his mentor, pediatrician William Nyhan, who published their findings in 1964.",
        "symptoms": ["blindness", "swelling", "behavioral disturbances", "vomiting", "depression", "irritability", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Lesch%E2%80%93Nyhan_syndrome"
    },
    "Antley\u2013Bixler syndrome": {
        "summary": "Antley\u2013Bixler syndrome, also called trapezoidocephaly-synostosis syndrome, is a rare, very severe autosomal recessive congenital disorder characterized by malformations and deformities affecting the majority of the skeleton and other areas of the body.",
        "symptoms": ["asthenia", "exophthalmos", "gas"],
        "url": "https://en.wikipedia.org/wiki/Antley%E2%80%93Bixler_syndrome"
    },
    "Tricho-hepato-enteric syndrome": {
        "summary": "Tricho-hepato-enteric syndrome (THE), also known as syndromic or phenotypic diarrhea, is an extremely rare congenital bowel disorder which manifests itself as intractable diarrhea in infants with intrauterine growth retardation, hair and facial abnormalities. Many also have liver disease and abnormalities of the immune system. The associated malabsorption leads to malnutrition and failure to thrive.",
        "symptoms": ["cirrhosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Tricho-hepato-enteric_syndrome"
    },
    "Persistent truncus arteriosus": {
        "summary": "Persistent truncus arteriosus (or Patent truncus arteriosus or Common arterial trunk), is a rare form of congenital heart disease that presents at birth. In this condition, the embryological structure known as the truncus arteriosus fails to properly divide into the pulmonary trunk and aorta. This results in one arterial trunk arising from the heart and providing mixed blood to the coronary arteries, pulmonary arteries, and systemic circulation.",
        "symptoms": ["hemoptysis"],
        "url": "https://en.wikipedia.org/wiki/Persistent_truncus_arteriosus"
    },
    "Apparent mineralocorticoid excess syndrome": {
        "summary": "Apparent mineralocorticoid excess (AME) is an autosomal recessive disorder causing hypertension (high blood pressure) and hypokalemia (abnormally low levels of potassium). It was found by Dr Maria L New at Weil Cornell Hospital in New York City, It results from mutations in the HSD11B2 gene, which encodes the kidney isozyme of 11\u03b2-hydroxysteroid dehydrogenase type 2. In an unaffected individual, this isozyme inactivates circulating cortisol to the less-active metabolite cortisone. The inactivating mutation leads to elevated local concentrations of cortisol in the Aldosterone sensitive tissues like the kidney. Cortisol at high concentrations can cross-react and activate the mineralocorticoid receptor due to the non-selectivity of the receptor, leading to aldosterone-like effects in the kidney. This is what causes the hypokalemia, hypertension, and hypernatremia associated with the syndrome. Patient often presents with severe hyperetension and end-organ changes associated with it like Left ventricular hypertrophy, retinal, renal and neurological vascular changes along with growth retardation and failure to thrive. In serum both Aldosterone and Renin levels are low,",
        "symptoms": ["edema", "high blood pressure", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Apparent_mineralocorticoid_excess_syndrome"
    },
    "Gestational trophoblastic disease": {
        "summary": "Gestational trophoblastic disease (GTD) is a term used for a group of pregnancy-related tumours. These tumours are rare, and they appear when cells in the womb start to proliferate uncontrollably. The cells that form gestational trophoblastic tumours are called trophoblasts and come from tissue that grows to form the placenta during pregnancy.",
        "symptoms": ["aching", "abscess", "vaginal bleeding", "vomiting", "bleeding", "gas"],
        "url": "https://en.wikipedia.org/wiki/Gestational_trophoblastic_disease"
    },
    "Andersen\u2013Tawil syndrome": {
        "summary": "Andersen\u2013Tawil syndrome, also called Andersen syndrome and Long QT syndrome 7, is a form of long QT syndrome. It is a rare genetic disorder, and is inherited in an autosomal dominant pattern and predisposes patients to cardiac arrhythmias. Jervell and Lange-Nielsen Syndrome is a similar disorder which is also associated with sensorineural hearing loss.",
        "symptoms": ["weakness", "deafness", "seizure", "paralysis", "scoliosis", "hearing loss", "arrhythmia", "tachycardia", "bradycardia", "hyperthermia", "depression", "fever", "ataxia", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Andersen%E2%80%93Tawil_syndrome"
    },
    "Pemphigus foliaceus": {
        "summary": "Pemphigus foliaceus is an autoimmune blistering disease of the skin with characteristic lesions that are scaly, crusted erosions, often on an erythematous base. Mucosal involvement is absent even with widespread disease.",
        "symptoms": ["blister"],
        "url": "https://en.wikipedia.org/wiki/Pemphigus_foliaceus"
    },
    "Sacral agenesis": {
        "summary": "Caudal regression syndrome or sacral agenesis (or hypoplasia of the sacrum) is a congenital disorder in which there is abnormal fetal development of the lower spine\u2014the caudal partition of the spine.",
        "symptoms": ["edema", "paralysis", "gas", "incontinence"],
        "url": "https://en.wikipedia.org/wiki/Sacral_agenesis"
    },
    "Aspartylglucosaminuria": {
        "summary": "Aspartylglucosaminuria (AGU) is an inherited disease that is characterized by a decline in mental functioning, accompanied by an increase in skin, bone and joint issues.",
        "symptoms": ["aching", "seizure", "scoliosis", "insomnia"],
        "url": "https://en.wikipedia.org/wiki/Aspartylglucosaminuria"
    },
    "Fabry disease": {
        "summary": "Fabry disease (/\u02c8f\u0251\u02d0bri/) (also known as Fabry's disease, Anderson-Fabry disease, angiokeratoma corporis diffusum, and alpha-galactosidase A deficiency) is a rare genetic lysosomal storage disease, inherited in an X-linked manner. Fabry disease can cause a wide range of systemic symptoms. It is a form of sphingolipidosis, as it involves dysfunctional metabolism of sphingolipids. The disease is named after one of its discoverers, Johannes Fabry (June 1, 1860 \u2013 June 29, 1930).",
        "symptoms": ["vertigo", "fatigue", "nausea", "high blood pressure", "tinnitus", "paresthesia", "gas", "sweating", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Fabry_disease"
    },
    "Sturge\u2013Weber syndrome": {
        "summary": "Sturge\u2013Weber syndrome, sometimes referred to as encephalotrigeminal angiomatosis, is a rare congenital neurological and skin disorder. It is one of the phakomatoses and is often associated with port-wine stains of the face, glaucoma, seizures, mental retardation, and ipsilateral leptomeningeal angioma (cerebral malformations and tumors). Sturge Weber Syndrome can be classified into three different types. Type 1 includes facial and leptomeningeal angiomas as well as the possibility of glaucoma or choroidal lesions. Normally, only one side of the brain is affected. This type is the most common. Type 2 involvement includes a facial angioma (port wine stain) with a possibility of glaucoma developing. There is not any evidence of brain involvement. Symptoms can show at any time beyond the initial diagnosis of the facial angioma. The symptoms can include glaucoma, cerebral blood flow abnormalities and headaches. More research is needed on this type of Sturge Weber Syndrome. Type 3 has leptomeningeal angioma involvement exclusively. The facial angioma is absent and glaucoma rarely occurs. This type is only diagnosed via brain scan.",
        "symptoms": ["edema", "muscle weakness", "weakness", "seizure", "convulsions", "headache", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Sturge%E2%80%93Weber_syndrome"
    },
    "Kasabach\u2013Merritt syndrome": {
        "summary": "Kasabach\u2013Merritt syndrome (KMS), also known as Hemangioma with thrombocytopenia is a rare disease, usually of infants, in which a vascular tumor leads to decreased platelet counts and sometimes other bleeding problems, which can be life-threatening. It is also known as hemangioma thrombocytopenia syndrome. It is named after Haig Haigouni Kasabach and Katharine Krom Merritt, the two pediatricians who first described the condition in 1940.",
        "symptoms": ["bleeding"],
        "url": "https://en.wikipedia.org/wiki/Kasabach%E2%80%93Merritt_syndrome"
    },
    "Danon disease": {
        "summary": "Danon disease (or glycogen storage disease Type IIb) is a metabolic disorder.",
        "symptoms": ["visual disturbances", "blindness", "muscle weakness", "weakness", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Danon_disease"
    },
    "Jacobsen syndrome": {
        "summary": "Jacobsen Syndrome, also known as 11q deletion disorder, is a rare congenital disorder resulting from deletion of a terminal region of chromosome 11 that includes band 11q24.1. It can cause intellectual disabilities, a distinctive facial appearance, and a variety of physical problems including heart defects and a bleeding disorder. The syndrome was first identified by Danish physician Petra Jacobsen, and is believed to occur in approximately 1 out of every 100,000 births.",
        "symptoms": ["edema", "bleeding", "urticaria"],
        "url": "https://en.wikipedia.org/wiki/Jacobsen_syndrome"
    },
    "Zaspopathy": {
        "summary": "Zaspopathy, also called ZASP-related myofibril myopathy, is a novel autosomal dominant form of progressive muscular dystrophy, first described in 2005.",
        "symptoms": ["asthenia", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Zaspopathy"
    },
    "Late-onset spinal motor neuronopathy": {
        "summary": "Late-Onset Spinal Motor Neuronopathy (LOSMoN) is a slowly progressing motor neuron disease. It is caused by a mutation in CHCHD10, and it is inherited in an autosomally dominant pattern.",
        "symptoms": ["twitch", "weakness", "muscle cramps"],
        "url": "https://en.wikipedia.org/wiki/Late-onset_spinal_motor_neuronopathy"
    },
    "Leigh disease": {
        "summary": "Leigh disease (also called Leigh syndrome and subacute necrotizing encephalomyelopathy ) is a rare inherited neurometabolic disorder that affects the central nervous system. It is named after Archibald Denis Leigh, a British neuropsychiatrist who first described the condition in 1951.",
        "symptoms": ["edema", "weakness", "aphasia", "seizure", "insomnia", "tachypnea", "headache", "sleep apnea", "myopathy", "deafness", "abscess", "tremors", "inflammation", "vomiting", "nystagmus", "hypotension", "paralysis", "lack of energy", "akathisia", "low blood sugar", "hypoventilation", "sleep disorders", "cataplexy", "tremor", "ataxia", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Leigh_disease"
    },
    "Goodpasture syndrome": {
        "summary": "Goodpasture syndrome (GPS; also known as Goodpasture\u2019s disease, antiglomerular basement antibody disease, or anti-GBM disease) is a rare autoimmune disease in which antibodies attack the basement membrane in lungs and kidneys, leading to bleeding from the lungs and kidney failure. It is thought to attack the alpha-3 subunit of type IV collagen, which has therefore been referred to as Goodpasture's antigen. Goodpasture syndrome may quickly result in permanent lung and kidney damage, often leading to death. It is treated with immunosuppressant drugs such as corticosteroids and cyclophosphamide, and with plasmapheresis, in which the antibodies are removed from the blood.",
        "symptoms": ["edema", "bleeding", "asthenia", "high blood pressure", "swelling", "weight loss", "incontinence", "fever", "shortness of breath", "urinary incontinence", "chest pain", "malaise", "chills", "urticaria", "ptosis", "fatigue", "cough", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Goodpasture_syndrome"
    },
    "Plummer\u2013Vinson syndrome": {
        "summary": "Plummer\u2013Vinson syndrome (PVS), also called Paterson\u2013Brown\u2013Kelly syndrome or sideropenic dysphagia, is a rare disease characterized by difficulty in swallowing, iron deficiency anemia, glossitis, cheilosis and esophageal webs. Treatment with iron supplementation and mechanical widening of the esophagus generally provides an excellent outcome.",
        "symptoms": ["dyspepsia", "steatorrhea", "weakness", "bleeding", "abscess", "inflammation", "constipation", "melena", "liver failure", "odynophagia", "ptosis", "cirrhosis", "gas", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Plummer%E2%80%93Vinson_syndrome"
    },
    "Progressive rubella panencephalitis": {
        "summary": "Progressive rubella panencephalitis (PRP) is a neurological disorder which may occur in a child with congenital rubella. It is a slow viral infection of the brain characterized by chronic encephalitis, usually manifesting between 8\u201319 years of age. It is believed to be due to a persistence or reactivation of rubella virus infection.",
        "symptoms": ["ataxia", "weakness", "seizure"],
        "url": "https://en.wikipedia.org/wiki/Progressive_rubella_panencephalitis"
    },
    "Systemic-onset juvenile idiopathic arthritis": {
        "summary": "Systemic onset juvenile idiopathic arthritis (also known as systemic juvenile idiopathic arthritis (sJIA)) is a type of juvenile idiopathic arthritis (JIA) with extra-articular manifestations like fever and rash apart from arthritis. It was originally called systemic onset juvenile rheumatoid arthritis or Still's disease.",
        "symptoms": ["rash", "fever", "inflammation"],
        "url": "https://en.wikipedia.org/wiki/Systemic-onset_juvenile_idiopathic_arthritis"
    },
    "Opsoclonus myoclonus syndrome": {
        "summary": "Opsoclonus Myoclonus Syndrome (OMS), also known as Opsoclonus-Myoclonus-Ataxia (OMA), is a rare neurological disorder of unknown causes which appears to be the result of an autoimmune process involving the nervous system. It is an extremely rare condition, affecting as few as 1 in 10,000,000 people per year. It affects 2 to 3% of children with neuroblastoma and has been reported to occur with celiac disease and diseases of neurologic and autonomic dysfunction.",
        "symptoms": ["aphasia", "lethargy", "vomiting", "malaise", "nystagmus", "drooling", "twitch", "ataxia", "irritability", "twitching"],
        "url": "https://en.wikipedia.org/wiki/Opsoclonus_myoclonus_syndrome"
    },
    "Postorgasmic illness syndrome": {
        "summary": "Postorgasmic illness syndrome (POIS) is a rare disease affecting men, which causes severe cognitive and physical symptoms immediately following ejaculation. The symptoms last for up to a week. Some doctors speculate that the frequency of POIS \"in the population may be greater than has been reported in the academic literature\", and that many POIS sufferers are undiagnosed.[medical citation needed] POIS is characterized by rapid onset after ejaculation, absence of local genital reaction, and presence of an overwhelming systemic reaction.",
        "symptoms": ["edema", "weakness", "aphasia", "anxiety", "fever", "hyperthermia", "malaise", "hypothermia", "lethargy", "retrograde ejaculation", "headache", "irritability", "gas", "myopathy", "asthenia", "tremors", "pyrexia", "depressed", "chills", "urticaria", "itching", "sneezing", "sluggishness", "infertility", "chronic pain", "irritation", "itchy eyes", "depression", "tremor", "myalgia", "fatigue", "sweating"],
        "url": "https://en.wikipedia.org/wiki/Postorgasmic_illness_syndrome"
    },
    "Polyorchidism": {
        "summary": "Polyorchidism is the incidence of more than two testicles. It is a very rare congenital disorder, with fewer than 200 cases reported in medical literature  and 6 cases (two horses, two dogs and two cats) in veterinary literature ",
        "symptoms": ["infertility"],
        "url": "https://en.wikipedia.org/wiki/Polyorchidism"
    },
    "Vestibular schwannoma": {
        "summary": "A vestibular schwannoma is a benign primary intracranial tumor of the myelin-forming cells of the vestibulocochlear nerve (8th cranial nerve). A type of schwannoma, this tumor arises from the Schwann cells responsible for the myelin sheath that helps keep peripheral nerves insulated. Although it is commonly called an acoustic neuroma, this a misnomer for two reasons. First, the tumor usually arises from the vestibular division of the vestibulocochlear nerve, rather than the cochlear division. Second, it is derived from the schwann cells of the associated nerve, rather than the actual neurons (neuromas).",
        "symptoms": ["vertigo", "confusion", "spinning", "weakness", "deafness", "tingling", "nausea", "head pain", "intracranial pressure", "numbness", "hearing loss", "dizziness", "vomiting", "tinnitus", "headache", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Vestibular_schwannoma"
    },
    "Glycine encephalopathy": {
        "summary": "Glycine encephalopathy (also known as non-ketotic hyperglycinemia or NKH) is a rare autosomal recessive disorder of glycine metabolism. After phenylketonuria, glycine encephalopathy is the second most common disorder of amino acid metabolism. The disease is caused by defects in the glycine cleavage system, an enzyme responsible for glycine catabolism. There are several forms of the disease, with varying severity of symptoms and time of onset. The symptoms are exclusively neurological in nature, and clinically this disorder is characterized by abnormally high levels of the amino acid glycine in bodily fluids and tissues, especially the cerebral spinal fluid.",
        "symptoms": ["confusion", "apnea", "lethargy", "ataxia", "seizure"],
        "url": "https://en.wikipedia.org/wiki/Glycine_encephalopathy"
    },
    "CAMFAK syndrome": {
        "summary": "CAMFAK syndrome (or CAMAK syndrome) is an acronym used to describe a rare inherited neurologic disease, characterized by peripheral and central demyelination of nerves, similar to that seen in Cockayne syndrome. The name \"CAMFAK\" comes from the first letters of the characteristic findings of the disease: cataracts, microcephaly, failure to thrive, and kyphoscoliosis. The disease may occur with or without failure to thrive and arthrogryposis.",
        "symptoms": ["akathisia", "edema", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "scoliosis", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea"],
        "url": "https://en.wikipedia.org/wiki/CAMFAK_syndrome"
    },
    "Draft:Michel aplasia": {
        "summary": "Michel aplasia, also known as complete labyrinthine aplasia (CLA), is a congenital abnormality of the inner ear. It is characterized by the bilateral absence of differentiated inner ear structures and results in complete deafness (anacusis). Michel aplasia should not be confused with michel dysplasia. It may affect one or both ears.",
        "symptoms": ["trauma", "deafness", "deformity", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Draft:Michel_aplasia"
    },
    "Acute eosinophilic pneumonia": {
        "summary": "Acute eosinophilic pneumonia is the acute-onset form of eosinophilic pneumonia, a lung disease caused by the buildup of eosinophils, a type of white blood cell, in the lungs. It is characterized by a rapid onset of shortness of breath, cough, fatigue, night sweats, and weight loss. Though the underlying cause is unknown, it can be triggered by a change in medication or tobacco smoking. It is treated with corticosteroids and has a favorable prognosis.",
        "symptoms": ["shortness of breath", "fatigue", "cough", "weight loss", "sweats"],
        "url": "https://en.wikipedia.org/wiki/Acute_eosinophilic_pneumonia"
    },
    "Kabuki syndrome": {
        "summary": "Kabuki syndrome, also previously known as Kabuki makeup syndrome, KMS or Niikawa\u2013Kuroki Syndrome, is a pediatric congenital disorder of suspected genetic origin  with multiple congenital anomalies and intellectual disabilities. It is quite rare, affecting roughly one in 32,000 births. It was identified and described in 1981 by two Japanese groups, led by the scientists Norio Niikawa and Yoshikazu Kuroki. It is named Kabuki Syndrome because of the facial resemblance of affected individuals to stage makeup used in Kabuki, a Japanese traditional theatrical form.",
        "symptoms": ["edema", "scoliosis", "hearing loss", "learning difficulties", "rash", "depressed"],
        "url": "https://en.wikipedia.org/wiki/Kabuki_syndrome"
    },
    "Epispadias": {
        "summary": "An epispadias is a rare type of malformation of the penis in which the urethra ends in an opening on the upper aspect (the dorsum) of the penis. It can also develop in females when the urethra develops too far anteriorly. It occurs in around 1 in 120,000 male and 1 in 500,000 female births.[citation needed]",
        "symptoms": ["depression", "gas", "incontinence"],
        "url": "https://en.wikipedia.org/wiki/Epispadias"
    },
    "Langer\u2013Giedion syndrome": {
        "summary": "Langer-Giedion Syndrome (LGS), also called trichorhinophalangeal syndrome type II (TRPS2) or LGCR (for \"Langer-Giedion Chromosome Region\"), is a very uncommon autosomal dominant genetic disorder caused by a deletion of chromosomal material. It is named after the two doctors who undertook the main research into the condition in the 1960s. Diagnosis is usually made at birth or in early childhood.",
        "symptoms": ["learning difficulties", "rash", "edema"],
        "url": "https://en.wikipedia.org/wiki/Langer%E2%80%93Giedion_syndrome"
    },
    "Scott syndrome": {
        "summary": "Scott syndrome is a rare congenital bleeding disorder that is due to a defect in a platelet mechanism required for blood coagulation.",
        "symptoms": ["bleeding"],
        "url": "https://en.wikipedia.org/wiki/Scott_syndrome"
    },
    "Crigler\u2013Najjar syndrome": {
        "summary": "Crigler\u2013Najjar syndrome or CNS is a rare inherited disorder affecting the metabolism of bilirubin, a chemical formed from the breakdown of the heme in red blood cells. The disorder results in a form of nonhemolytic jaundice, which results in high levels of unconjugated bilirubin and often leads to brain damage in infants. The disorder is inherited in an autosomal recessive manner.",
        "symptoms": ["cirrhosis", "jaundice"],
        "url": "https://en.wikipedia.org/wiki/Crigler%E2%80%93Najjar_syndrome"
    },
    "Diffuse panbronchiolitis": {
        "summary": "Diffuse panbronchiolitis (DPB) is an inflammatory lung disease of unknown cause. It is a severe, progressive form of bronchiolitis, an inflammatory condition of the bronchioles (small air passages in the lungs). The term diffuse signifies that lesions appear throughout both lungs, while panbronchiolitis refers to inflammation found in all layers of the respiratory bronchioles (those involved in gas exchange). DPB causes severe inflammation and nodule-like lesions of terminal bronchioles, chronic sinusitis, and intense coughing with large amounts of sputum production.",
        "symptoms": ["edema", "dyspnea", "abscess", "high blood pressure", "inflammation", "sputum production", "fever", "wheezing", "shortness of breath", "cough", "gas"],
        "url": "https://en.wikipedia.org/wiki/Diffuse_panbronchiolitis"
    },
    "Kindler syndrome": {
        "summary": "Kindler syndrome (also known as \"Bullous acrokeratotic poikiloderma of Kindler and Weary,\", \"Congenital poikiloderma with blisters and keratoses,\" \"Congenital poikiloderma with bullae and progressive cutaneous atrophy,\" \"Hereditary acrokeratotic poikiloderma,\" \"Hyperkeratosis\u2013hyperpigmentation syndrome,\":511 \"Acrokeratotic poikiloderma,\" and \"Weary\u2013Kindler syndrome\":558) is a rare congenital disease of the skin caused by a mutation in the KIND1 gene.",
        "symptoms": ["edema", "blister", "urticaria", "trauma", "hyperpigmentation"],
        "url": "https://en.wikipedia.org/wiki/Kindler_syndrome"
    },
    "Pemphigus vulgaris": {
        "summary": "Pemphigus vulgaris is a rare chronic blistering skin disease. It is classified as a type II hypersensitivity reaction, with the formation of antibodies against desmosomes, components of the skin that function to keep certain layers of skin bound to each other. As desmosomes are attacked, the layers of skin separate and the clinical picture resembles a blister. Over time the condition inevitably progresses without treatment: lesions increase in size and distribution throughout the body, behaving physiologically like a severe burn. Before the advent of modern treatments, mortality for the disease was close to 90%. Today, the mortality rate with treatment is between 5-15%.",
        "symptoms": ["blister"],
        "url": "https://en.wikipedia.org/wiki/Pemphigus_vulgaris"
    },
    "Congenital lactic acidosis": {
        "summary": "Congenital lactic acidosis (CLA) is a rare disease caused by mutations in mitochondrial DNA (mtDNA) that affect the ability of cells to use energy and cause too much lactic acid to build up in the body, a condition called lactic acidosis.",
        "symptoms": ["tachypnea", "seizure", "vomiting", "lethargy"],
        "url": "https://en.wikipedia.org/wiki/Congenital_lactic_acidosis"
    },
    "Fukuyama congenital muscular dystrophy": {
        "summary": "Fukuyama congenital muscular dystrophy (FCMD) is a rare, autosomal recessive form of muscular dystrophy (weakness and breakdown of muscular tissue) mainly described in Japan but also identified in Turkish and Ashkenazi Jewish patients, fifteen cases were first described on 1960 by Fukuyama.",
        "symptoms": ["weakness", "trauma", "asthenia", "seizure", "paralysis", "infertility", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Fukuyama_congenital_muscular_dystrophy"
    },
    "Hyper-IgM syndrome type 2": {
        "summary": "In medicine, Hyper IgM Syndrome Type 2 is a rare disease.",
        "symptoms": ["ataxia", "edema"],
        "url": "https://en.wikipedia.org/wiki/Hyper-IgM_syndrome_type_2"
    },
    "Metascreen": {
        "summary": "Metascreen is an advanced non-invasive metabolic screening test distributed by Cordlife Group Limited (\"Cordlife\"). It can detect as many as 110 inborn errors of metabolism (\"IEMs\", or metabolic disorders) from a urine specimen. Cordlife owns the brand name and trademark, \"Metascreen\".",
        "symptoms": ["rash", "gas", "sterility"],
        "url": "https://en.wikipedia.org/wiki/Metascreen"
    },
    "Craniodiaphyseal dysplasia": {
        "summary": "Craniodiaphyseal dysplasia (also known as CDD or lionitis) is an extremely rare autosomal recessive bone disorder that causes calcium to build up in the skull, disfiguring the facial features and reducing life expectancy.",
        "symptoms": ["scoliosis", "seizure", "paralysis", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Craniodiaphyseal_dysplasia"
    },
    "Jalili syndrome": {
        "summary": "Jalili syndrome is a genetic disorder characterized by the combination of cone-rod dystrophy of the retina and amelogenesis imperfecta. It was characterized in 1988 by Dr. I. K. Jalili and Dr. N. J. D. Smith, following the examination of 29 members of an inbred, Arab family living within the Gaza Strip.",
        "symptoms": ["nystagmus", "loss of vision", "phobia"],
        "url": "https://en.wikipedia.org/wiki/Jalili_syndrome"
    },
    "Glycogen storage disease type II": {
        "summary": "Glycogen storage disease type II (also called Pompe disease /\u02c8p\u0252mp\u0259/ or acid maltase deficiency) is an autosomal recessive metabolic disorder which damages muscle and nerve cells throughout the body. It is caused by an accumulation of glycogen in the lysosome due to deficiency of the lysosomal acid alpha-glucosidase enzyme. It is the only glycogen storage disease with a defect in lysosomal metabolism, and the first glycogen storage disease to be identified, in 1932 by the Dutch pathologist J. C. Pompe.",
        "symptoms": ["weakness", "arrhythmia", "rash", "fever", "skin rash", "muscle weakness", "cough", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Glycogen_storage_disease_type_II"
    },
    "Schmitt Gillenwater Kelly syndrome": {
        "summary": "Schmitt Gillenwater Kelly syndrome is a rare autosomal dominant congenital disorder consisting of radial hypoplasia, triphalangeal thumbs, hypospadias, and maxillary diastema.",
        "symptoms": ["scoliosis", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Schmitt_Gillenwater_Kelly_syndrome"
    },
    "Proteus syndrome": {
        "summary": "Proteus syndrome, also known as Wiedemann syndrome (named after the German pediatrician Hans-Rudolf Wiedemann), is a rare congenital disorder that causes skin overgrowth and atypical bone development, often accompanied by tumors over half the body.:776",
        "symptoms": ["ataxia", "deformity", "edema"],
        "url": "https://en.wikipedia.org/wiki/Proteus_syndrome"
    },
    "Hermansky\u2013Pudlak syndrome": {
        "summary": "Hermansky\u2013Pudlak syndrome (HPS) is an extremely rare autosomal recessive disorder which results in oculocutaneous albinism (decreased pigmentation), bleeding problems due to a platelet abnormality (platelet storage pool defect), and storage of an abnormal fat-protein compound (lysosomal accumulation of ceroid lipofuscin).",
        "symptoms": ["phobia", "deafness", "asthenia", "nystagmus", "hyperpigmentation", "ataxia", "bleeding", "gas"],
        "url": "https://en.wikipedia.org/wiki/Hermansky%E2%80%93Pudlak_syndrome"
    },
    "Kaufman oculocerebrofacial syndrome": {
        "summary": "Kaufman oculocerebrofacial syndrome is an autosomal recessive congenital disorder characterized by mental retardation, microbrachycephaly, long narrow face, upslanting palpebral fissures, eye abnormalities, highly arched palate, preauricular skin tags and small mandible.",
        "symptoms": ["gas"],
        "url": "https://en.wikipedia.org/wiki/Kaufman_oculocerebrofacial_syndrome"
    },
    "Farber disease": {
        "summary": "Farber disease (also known as Farber's lipogranulomatosis, ceramidase deficiency, \"Fibrocytic dysmucopolysaccharidosis,\" and \"Lipogranulomatosis\":545) is an extremely rare (80 cases reported worldwide to this day) autosomal recessive lysosomal storage disease marked by a deficiency in the enzyme ceramidase that causes an accumulation of fatty material sphingolipids leading to abnormalities in the joints, liver, throat, tissues and central nervous system. Normally, the enzyme ceramidase breaks down fatty material in the body\u2019s cells. In Farber Disease, the gene responsible for making this enzyme is mutated. Hence, the fatty material is never broken down and, instead, accumulates in various parts of the body, leading to the signs and symptoms of this disorder.",
        "symptoms": ["swollen lymph nodes", "vomiting"],
        "url": "https://en.wikipedia.org/wiki/Farber_disease"
    },
    "Alien hand syndrome": {
        "summary": "Alien hand syndrome (AHS) is a condition in which a person experiences their limbs acting seemingly on their own, without control over the actions. The term is used for a variety of clinical conditions and most commonly affects the left hand. There are many similar names used to describe the various forms of the condition but they are often used inappropriately. The afflicted person may sometimes reach for objects and manipulate them without wanting to do so, even to the point of having to use the controllable hand to restrain the alien hand. While under normal circumstances, thought, as intent, and action can be assumed to be deeply mutually entangled, the occurrence of alien hand syndrome can be usefully conceptualized as a phenomenon reflecting a functional \"disentanglement\" between thought and action.[citation needed]",
        "symptoms": ["aching", "confusion", "apraxia", "loss of inhibition", "weakness", "aphasia", "seizure", "alexia", "dysarthria", "claudication", "headache", "drooling", "tremor", "ataxia", "acalculia", "epistaxis"],
        "url": "https://en.wikipedia.org/wiki/Alien_hand_syndrome"
    },
    "Leontiasis ossea": {
        "summary": "Leontiasis ossea, also known as leontiasis, lion face or Lion Face Syndrome, is a rare medical condition, characterized by an overgrowth of the facial and cranial bones. It is not a disease in itself, but a symptom of other diseases, including Paget's disease, fibrous dysplasia, hyperparathyroidism and renal osteodystrophy.",
        "symptoms": ["aching", "exophthalmos", "trauma"],
        "url": "https://en.wikipedia.org/wiki/Leontiasis_ossea"
    },
    "Scarlet fever": {
        "summary": "Scarlet fever can occur as a result of a group A Streptococcus (group A strep) infection. The signs and symptoms include a sore throat, fever, headaches, swollen lymph nodes, and a characteristic rash. The rash is red and feels like sandpaper and the tongue may be red and bumpy. It most commonly affects children between five and fifteen years of age.",
        "symptoms": ["confusion", "edema", "loss of appetite", "hallucination", "paranoia", "sore throat", "swollen lymph nodes", "nausea", "cough", "inflammation", "skin ulcers", "rash", "vomiting", "chills", "fever", "headache", "sneezing", "skin infection", "gas"],
        "url": "https://en.wikipedia.org/wiki/Scarlet_fever"
    },
    "Alagille syndrome": {
        "summary": "Alagille syndrome or ALGS, is an autosomal dominant genetic disorder that affects the liver, heart, kidney, and other systems of the body. Problems associated with the disorder generally become evident in infancy or early childhood. The disorder is inherited in an autosomal dominant pattern, and the estimated prevalence of Alagille syndrome is 1 in every 100,000 live births.",
        "symptoms": ["itching", "cirrhosis", "pale stools", "heart murmur", "jaundice"],
        "url": "https://en.wikipedia.org/wiki/Alagille_syndrome"
    },
    "Mal de debarquement": {
        "summary": "Mal de debarquement (or Mal de d\u00e9barquement) syndrome (MdDS, or common name disembarkment syndrome) is a rare neurological condition usually occurring after a cruise, aircraft flight, or other sustained motion event. The phrase \"mal de d\u00e9barquement\" is French for \"Sickness from Disembarkation\". MdDS is typically diagnosed by a Neurologist or an Ear Nose & Throat Specialist when a person reports a persistent rocking, swaying, or bobbing feeling (though they are not necessarily rocking). This usually follows a cruise or other motion experience. Because most vestibule testing proves to be negative, doctors may be baffled as they attempt to diagnose this rare neurological syndrome. A major diagnostic indicator is that most patients feel better while driving or riding in a car or while in passive motion. The syndrome has recently received increased attention due to the number of people presenting with the condition and more scientific research has commenced now for a number of years to determine what triggers MdDs and how to cure it.",
        "symptoms": ["vertigo", "confusion", "visual disturbances", "dizziness", "headache", "blurred vision", "memory loss", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Mal_de_debarquement"
    },
    "Sirenomelia": {
        "summary": "Sirenomelia, alternatively known as Mermaid Syndrome, is a rare congenital deformity in which the legs are fused together, giving them the appearance of a mermaid's tail.",
        "symptoms": ["trauma", "deformity", "edema", "gas"],
        "url": "https://en.wikipedia.org/wiki/Sirenomelia"
    },
    "Legg\u2013Calv\u00e9\u2013Perthes disease": {
        "summary": "Legg\u2013Calv\u00e9\u2013Perthes disease (LCPD) is a childhood hip disorder initiated by a disruption of blood flow to the ball of the femur called the femoral head. Due to the lack of blood flow, the bone dies (osteonecrosis or avascular necrosis) and stops growing. Over time, healing occurs by new blood vessels infiltrating the dead bone and removing the necrotic bone which leads to a loss of bone mass and a weakening of the femoral head. The bone loss leads to some degree of collapse and deformity of the femoral head and sometimes secondary changes to the shape of the hip socket. It is also referred to as idiopathic avascular osteonecrosis of the capital femoral epiphysis of the femoral head since the cause of the interruption of the blood supply of the head of the femur in the hip joint is unknown.",
        "symptoms": ["deformity", "groin pain", "trauma", "inflammation", "irritation", "tired", "hip pain"],
        "url": "https://en.wikipedia.org/wiki/Legg%E2%80%93Calv%C3%A9%E2%80%93Perthes_disease"
    },
    "Hajdu\u2013Cheney syndrome": {
        "summary": "Hajdu\u2013Cheney syndrome, also called acroosteolysis with osteoporosis and changes in skull and mandible, arthrodentoosteodysplasia, and Cheney syndrome, is an extremely rare autosomal dominant congenital disorder of the connective tissue characterized by severe and excessive bone resorption leading to osteoporosis and a wide range of other possible symptoms. Mutations in the NOTCH2 gene, identified in 2011, cause HCS. HCS is so rare that only about 70 cases have been reported worldwide, since the discovery of the syndrome in 1948.",
        "symptoms": ["skeletal malformations", "abscess", "inflammation", "trauma", "skeletal malformation"],
        "url": "https://en.wikipedia.org/wiki/Hajdu%E2%80%93Cheney_syndrome"
    },
    "Histoplasmosis": {
        "summary": "Histoplasmosis (also known as \"Cave disease,\" \"Darling's disease,\" \"Ohio valley disease,\" \"reticuloendotheliosis,\" \"spelunker's lung\" and \"caver's disease\") is a disease caused by the fungus Histoplasma capsulatum. Symptoms of this infection vary greatly, but the disease affects primarily the lungs. Occasionally, other organs are affected; this is called disseminated histoplasmosis, and it can be fatal if left untreated.",
        "symptoms": ["boil", "aching", "mania", "skin lesion", "abscess", "hemoptysis", "insect bite", "rash", "urticaria", "hyperpigmentation", "frequent infection", "loss of vision", "cough", "alopecia", "blister"],
        "url": "https://en.wikipedia.org/wiki/Histoplasmosis"
    },
    "Stickler syndrome": {
        "summary": "Stickler syndrome (hereditary progressive arthro-ophthalmopathy) is a group of genetic disorders affecting connective tissue, specifically collagen. Stickler syndrome is a subtype of collagenopathy, types II and XI. Stickler syndrome is characterized by distinctive facial abnormalities, ocular problems, hearing loss, and joint problems. It was first studied and characterized by Gunnar B. Stickler in 1965.",
        "symptoms": ["joint pain", "learning difficulties", "myopathy", "scoliosis", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Stickler_syndrome"
    },
    "GAPO syndrome": {
        "summary": "GAPO syndrome is a rare, autosomal recessive disorder that causes severe growth retardation, and has been observed fewer than 30 times before 2011. GAPO is an acronym that encompasses the predominant traits of the disorder: growth retardation, alopecia, pseudoanodontia (teeth failing to emerge from the gums), and worsening optic atrophy in some subjects. Other common symptoms include premature aging, large, prominent foreheads, and delayed bone aging. GAPO syndrome typically results in premature death around age 30-40, due to interstitial fibrosis and atherosclerosis.",
        "symptoms": ["depressed", "hair loss", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/GAPO_syndrome"
    },
    "Laurence\u2013Moon syndrome": {
        "summary": "Laurence\u2013Moon syndrome (LMS) is a rare autosomal recessive genetic disorder associated with retinitis pigmentosa, spastic paraplegia, and mental disabilities.",
        "symptoms": ["edema", "gas"],
        "url": "https://en.wikipedia.org/wiki/Laurence%E2%80%93Moon_syndrome"
    },
    "Paroxysmal nocturnal hemoglobinuria": {
        "summary": "Paroxysmal nocturnal hemoglobinuria (PNH) is a rare, acquired, life-threatening disease of the blood characterized by destruction of red blood cells by the complement system, a part of the body's intrinsic immune system. This destructive process is a result of a defect in the formation of surface proteins on the red blood cell, which normally function to inhibit such immune reactions. Since the complement cascade attacks the red blood cells throughout the circulatory system, the hemolysis is considered an intravascular hemolytic anemia. Other key features of the disease, notably the high incidence of thrombosis, are not totally understood.",
        "symptoms": ["edema", "palpitation", "hypoventilation", "shortness of breath", "abdominal pain", "tired", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Paroxysmal_nocturnal_hemoglobinuria"
    },
    "Methylmalonic acidemia": {
        "summary": "Methylmalonic acidemia (MMA), also called methylmalonic aciduria,[help 1] is an autosomal recessive metabolic disorder. It is a classical type of organic acidemia. The result of this condition is the inability to properly digest specific fats and proteins, which in turn leads to a buildup of a toxic level of methylmalonic acid in the blood.",
        "symptoms": ["seizure", "lethargy", "dehydration", "vomiting", "ptosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Methylmalonic_acidemia"
    },
    "Imerslund\u2013Gr\u00e4sbeck syndrome": {
        "summary": "Imerslund\u2013Gr\u00e4sbeck syndrome, also known as Imerslund\u2013Najman\u2013Gr\u00e4sbeck syndrome, Imerslund\u2013Gr\u00e4sbeck disease (IGS or INGS), Imerslund syndrome, congenital cobalamin malabsorption or autosomal recessive megaloblastic anemia (MGA1), is a rare autosomal recessive, familial form of vitamin B12 deficiency caused by malfunction of the \"Cubam\" receptor located in the terminal ileum. This receptor is composed of two proteins, amnionless (AMN), and cubilin. A defect in either of these protein components can cause this syndrome. This is a rare disease, with a prevalence about 1 in 200,000, and is usually seen in patients of European ancestry.",
        "symptoms": ["fatigue", "paralysis", "inflammation", "tingling"],
        "url": "https://en.wikipedia.org/wiki/Imerslund%E2%80%93Gr%C3%A4sbeck_syndrome"
    },
    "Saccharopinuria": {
        "summary": "Saccharopinuria (an excess of saccharopine in the urine), also called saccharopinemia, saccharopine dehydrogenase deficiency or alpha-aminoadipic semialdehyde synthase deficiency, is a variant form of hyperlysinemia. It is caused by a partial deficiency of the enzyme saccharopine dehydrogenase, which plays a secondary role in the lysine metabolic pathway. Inheritance is thought to be autosomal recessive, but this cannot be established as individuals affected by saccharopinuria typically have only a 40% reduction in functional enzyme.",
        "symptoms": ["gas"],
        "url": "https://en.wikipedia.org/wiki/Saccharopinuria"
    },
    "Pearson syndrome": {
        "summary": "Pearson syndrome is a mitochondrial disease characterized by sideroblastic anemia and exocrine pancreas dysfunction. Other clinical features are failure to thrive, pancreatic fibrosis with insulin-dependent diabetes and exocrine pancreatic deficiency, muscle and neurologic impairment, and, frequently, early death. It is usually fatal in infancy. The few patients who survive into adulthood often develop symptoms of Kearns-Sayre syndrome.",
        "symptoms": ["myopathy"],
        "url": "https://en.wikipedia.org/wiki/Pearson_syndrome"
    },
    "Jervell and Lange-Nielsen syndrome": {
        "summary": "Jervell and Lange-Nielsen syndrome (JLNS) is a type of long QT syndrome, associated with severe, bilateral sensorineural hearing loss. Long QT syndrome causes the cardiac muscle to take longer than usual to recharge between beats. If untreated, the irregular heartbeats, called arrhythmias, can lead to fainting, seizures, or sudden death. It was first described by Anton Jervell and Fred Lange-Nielsen in 1957.",
        "symptoms": ["irregular heartbeat", "deafness", "seizure", "paralysis", "hearing loss", "arrhythmia", "tachycardia", "bradycardia", "hyperthermia", "depression", "fever", "ataxia", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Jervell_and_Lange-Nielsen_syndrome"
    },
    "Robinow syndrome": {
        "summary": "Robinow syndrome is an extremely rare genetic disorder characterized by short-limbed dwarfism, abnormalities in the head, face, and external genitalia, as well as vertebral segmentation. The disorder was first described in 1969 by human geneticist Meinhard Robinow, along with physicians Frederic N. Silverman and Hugo D. Smith, in the American Journal of Diseases of Children. By 2002, over 100 cases had been documented and introduced into medical literature.",
        "symptoms": ["asthenia", "edema", "gas", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Robinow_syndrome"
    },
    "Multiple epiphyseal dysplasia": {
        "summary": "Fairbank's disease or multiple epiphyseal dysplasia (MED) is a rare genetic disorder (dominant form: 1 in 10,000 births) that affects the growing ends of bones. Bones usually elongate by a process that involves the depositing of cartilage at their ends, called ossification. This cartilage then mineralizes and hardens to become bone. In MED, this process is defective.",
        "symptoms": ["joint pain", "overweight", "muscle weakness", "weakness", "ear swelling", "swelling", "scoliosis", "myopathy", "hip pain", "ataxia", "ptosis", "fatigue", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Multiple_epiphyseal_dysplasia"
    },
    "Aromatase excess syndrome": {
        "summary": "Aromatase excess syndrome (AES or AEXS), also sometimes referred to as familial hyperestrogenism or familial gynecomastia, is a rare genetic and endocrine syndrome which is characterized by an overexpression of aromatase, the enzyme responsible for the biosynthesis of the estrogen sex hormones from the androgens, in turn resulting in excessive levels of circulating estrogens and, accordingly, symptoms of hyperestrogenism. It affects both sexes, manifesting itself in males as marked or complete phenotypical feminization (with the exception of the genitalia; i.e., no pseudohermaphroditism) and in females as hyperfeminization.",
        "symptoms": ["edema", "rash", "headache", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Aromatase_excess_syndrome"
    },
    "Kimura's disease": {
        "summary": "Kimura's disease is a benign rare chronic inflammatory disorder. Its primary symptoms are subdermal lesions in the head or neck or painless unilateral inflammation of cervical lymph nodes.",
        "symptoms": ["skin lesion", "trauma", "swelling", "inflammation", "itching", "hirsutism"],
        "url": "https://en.wikipedia.org/wiki/Kimura%27s_disease"
    },
    "Sanjad-Sakati syndrome": {
        "summary": "Sanjad-Sakati syndrome is a rare autosomal recessive genetic condition seen in offspring of Middle Eastern origin. It was first described in Saudi Arabia, but has been seen in Qatari, Kuwaiti, Omani and other children from the Middle East as well as elsewhere. The condition is caused by mutations or deletions in the TBCE gene of Chromosome No.1.",
        "symptoms": ["seizure"],
        "url": "https://en.wikipedia.org/wiki/Sanjad-Sakati_syndrome"
    },
    "Breast hypertrophy": {
        "summary": "Breast hypertrophy is a rare medical condition of the breast connective tissues in which the breasts become excessively large. The condition is often divided based on the severity into two types, macromastia and gigantomastia. Hypertrophy of the breast tissues may be caused by increased histologic sensitivity to certain hormones such as female sex hormones, prolactin, and growth factors. Breast hypertrophy is a benign progressive enlargement, which can occur in both breasts (bilateral) or only in one breast (unilateral). It was first scientifically described in 1648.",
        "symptoms": ["overweight", "nipple discharge", "tingling", "bleeding", "abscess", "swelling", "inflammation", "numbness", "irritation", "obesity", "rash", "fever", "skin rash", "depression", "headache", "ptosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Breast_hypertrophy"
    },
    "GM2-gangliosidosis, AB variant": {
        "summary": "GM2-gangliosidosis, AB variant is a rare, autosomal recessive metabolic disorder that causes progressive destruction of nerve cells in the brain and spinal cord. It has a similar pathology to Sandhoff disease and Tay-Sachs disease. The three diseases are classified together as the GM2 gangliosidoses, because each disease represents a distinct molecular point of failure in the activation of the same enzyme, beta-hexosaminidase. AB variant is caused by a failure in the gene that makes an enzyme cofactor for beta-hexosaminidase, called the GM2 activator.",
        "symptoms": ["seizure", "paralysis", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/GM2-gangliosidosis,_AB_variant"
    },
    "Oxycephaly": {
        "summary": "Oxycephaly, also known as turricephaly, acrocephaly, hypsicephaly, oxycephalia, steeple head, tower head, tower skull, high-head syndrome and Turmsch\u00e4del, is a type of cephalic disorder where the top of the skull is pointed or conical due to premature closure of the coronal suture plus any other suture, like the lambdoid, or it may be used to describe the premature fusion of all sutures. It should be differentiated from Crouzon syndrome. Oxycephaly is the most severe of the craniosynostoses.",
        "symptoms": ["scoliosis", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Oxycephaly"
    },
    "Progressive supranuclear palsy": {
        "summary": "Progressive supranuclear palsy (PSP; or the Steele-Richardson-Olszewski syndrome, after the doctors who described it in 1963) is a degenerative disease involving the gradual deterioration and death of specific volumes of the brain. Males and females are affected approximately equally and there is no racial, geographical or occupational predilection. Approximately 6 people per 100,000 population have PSP. It has been described as a tauopathy.",
        "symptoms": ["edema", "aphasia", "seizure", "insomnia", "diplopia", "loss of inhibition", "double vision", "loss of balance", "headache", "sleep apnea", "gas", "abscess", "inflammation", "urinary incontinence", "nystagmus", "hypotension", "incontinence", "akathisia", "dysarthria", "constipation", "hypoventilation", "sleep disorders", "tired", "cataplexy", "tremor", "ataxia", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Progressive_supranuclear_palsy"
    },
    "Uterus didelphys": {
        "summary": "Uterus didelphys (sometimes also uterus didelphis) represents a uterine malformation where the uterus is present as a paired organ when the embryogenetic fusion of the M\u00fcllerian ducts fails to occur. As a result, there is a double uterus with two separate cervices, and rarely a double vagina as well. Each uterus has a single horn linked to the ipsilateral fallopian tube that faces its ovary.",
        "symptoms": ["dyspareunia", "infertility"],
        "url": "https://en.wikipedia.org/wiki/Uterus_didelphys"
    },
    "B\u00f6rjeson-Forssman-Lehmann syndrome": {
        "summary": "B\u00f6rjeson-Forssman-Lehmann syndrome (BFLS) is a rare genetic disease that causes intellectual disability, obesity, and growth defects.",
        "symptoms": ["anxiety", "scoliosis", "hearing loss", "obesity", "psychiatric problem", "nystagmus", "depression", "impaired vision", "ptosis"],
        "url": "https://en.wikipedia.org/wiki/B%C3%B6rjeson-Forssman-Lehmann_syndrome"
    },
    "Pyoderma gangrenosum": {
        "summary": "Pyoderma gangrenosum is a condition that causes tissue to become necrotic, causing deep ulcers that usually occur on the legs. When they occur, they can lead to chronic wounds. Ulcers usually initially look like small bug bites or papules, and they progress to larger ulcers. Though the wounds rarely lead to death, they can cause pain and scarring.",
        "symptoms": ["rash", "trauma", "spider bite"],
        "url": "https://en.wikipedia.org/wiki/Pyoderma_gangrenosum"
    },
    "Glycogen storage disease": {
        "summary": "Glycogen storage disease (GSD, also glycogenosis and dextrinosis) is the result of defects in the processing of glycogen synthesis or breakdown within muscles, liver, and other cell types.",
        "symptoms": ["muscle weakness", "weakness", "muscle cramp", "muscle cramps", "myalgia", "cirrhosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Glycogen_storage_disease"
    },
    "Marshall syndrome": {
        "summary": "Marshall syndrome is a genetic disorder of the connective tissue which can cause hearing loss. The three most common areas to be affected are the eyes which are uncommonly large, joints and the mouth and facial structures. Marshall syndrome and Stickler syndrome closely resemble each other; in fact they are so similar, some say they are the same.",
        "symptoms": ["depressed", "myopathy", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Marshall_syndrome"
    },
    "Hyperkalemic periodic paralysis": {
        "summary": "Hyperkalemic periodic paralysis (HYPP, HyperKPP) is a genetic disorder. It occurs in humans, horses (where it is also known as Impressive syndrome, after an index case in a horse named Impressive, or possibly one of his ancestors), and perhaps other animals. It is an inherited autosomal dominant disorder that affects sodium channels in muscle cells and the ability to regulate potassium levels in the blood. It is most commonly associated with horses, but occurs in humans, where it may be called Gamstorp episodic adynamy. It is characterized by muscle hyperexcitability or weakness which, exacerbated by potassium, heat or cold, can lead to uncontrolled shaking followed by paralysis. Onset in humans usually occurs in early childhood, but still occurs with adults.",
        "symptoms": ["muscle weakness", "weakness", "deafness", "asthenia", "seizure", "paralysis", "shaking", "hyperthermia", "twitch", "ataxia", "fatigue", "twitching", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Hyperkalemic_periodic_paralysis"
    },
    "Bhaskar\u2013Jagannathan syndrome": {
        "summary": "Bhaskar\u2013Jagannathan syndrome is an extremely rare genetic disorder and there is a limited amount of information related to it. Similar or related medical conditions are arachnodactyly, aminoaciduria, congenital cataracts, cerebellar ataxia, and delayed developmental milestones.",
        "symptoms": ["ataxia", "incoordination"],
        "url": "https://en.wikipedia.org/wiki/Bhaskar%E2%80%93Jagannathan_syndrome"
    },
    "Dandy\u2013Walker syndrome": {
        "summary": "Dandy\u2013Walker syndrome (DWS) is a rare group of congenital human brain malformations. There are three subtypes which affect multiple organs to varying degrees, but the fundamental abnormalities involve the cerebellum which controls muscle coordination. The adjacent fourth ventricle is often affected which can alter the flow of cerebrospinal fluid, increase intracranial pressure, and lead to multiple other brain function problems. The degree of disability varies but is typically lifelong. Treatment may involve physical therapy, special education, or surgical placement of a cerebral shunt. It is named for Walter Dandy and Arthur Earl Walker.",
        "symptoms": ["blindness", "swelling", "intracranial pressure", "vomiting", "convulsions", "irritability"],
        "url": "https://en.wikipedia.org/wiki/Dandy%E2%80%93Walker_syndrome"
    },
    "Hyperphosphatasia with mental retardation syndrome": {
        "summary": "Hyperphosphatasia with mental retardation syndrome, HPMRS, also known as Mabry syndrome, has been described in patients recruited on four continents world-wide. Mabry syndrome was confirmed  to represent an autosomal recessive syndrome characterized by severe mental retardation, considerably elevated serum levels of alkaline phosphatase, hypoplastic terminal phalanges, and distinct facial features that include: hypertelorism, a broad nasal bridge and a rectangular face.",
        "symptoms": ["seizure"],
        "url": "https://en.wikipedia.org/wiki/Hyperphosphatasia_with_mental_retardation_syndrome"
    },
    "Ichthyosis follicularis with alopecia and photophobia syndrome": {
        "summary": "IFAP syndrome is an extremely rare genetic syndrome. It is also known as Ichthyosis follicularis, alopecia, and photophobia syndrome or simply ichthyosis follicularis.:564 It is extremely rare: there were only 10 known cases (all male) in 1998.",
        "symptoms": ["scaly skin", "phobia", "alopecia", "seizure"],
        "url": "https://en.wikipedia.org/wiki/Ichthyosis_follicularis_with_alopecia_and_photophobia_syndrome"
    },
    "Williams syndrome": {
        "summary": "Williams syndrome (WS) is a developmental disorder that affects many parts of the body. Facial features frequently include a broad forehead, short nose, and full cheeks, an appearance which has been described as \"elfin\". Mild to moderate intellectual disability with particular problems with visual spatial tasks such as drawing and fewer problems with language are typical. Those affected often have an outgoing personality and interact readily with strangers. Problems with teeth, heart problems, especially supravalvular aortic stenosis, and periods of high blood calcium are common.",
        "symptoms": ["aching", "phobia", "hyperactivity", "joint stiffness", "weakness", "aggressive behavior", "aggression", "stings", "anxiety", "heart murmur", "hearing loss", "constipation", "abdominal pain", "nystagmus", "irritability", "gas"],
        "url": "https://en.wikipedia.org/wiki/Williams_syndrome"
    },
    "Boomerang dysplasia": {
        "summary": "Boomerang dysplasia is a lethal form of osteochondrodysplasia known for a characteristic congenital feature in which bones of the arms and legs are malformed into the shape of a boomerang. Death usually occurs in early infancy due to complications arising from overwhelming systemic bone malformations.",
        "symptoms": ["ataxia", "cirrhosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Boomerang_dysplasia"
    },
    "Colloid cyst": {
        "summary": "A colloid cyst is a cyst containing gelatinous material in the brain. It is almost always found just posterior to the foramen of Monro in the anterior aspect of the third ventricle, originating from the roof of the ventricle. Because of its location, it can cause obstructive hydrocephalus and increased intracranial pressure. Colloid cysts represent 0.5%-1% of intracranial tumors.",
        "symptoms": ["vertigo", "diplopia", "headache", "behavioral disturbances", "intracranial pressure"],
        "url": "https://en.wikipedia.org/wiki/Colloid_cyst"
    },
    "Nager acrofacial dysostosis": {
        "summary": "Nager acrofacial dysostosis is a congenital anomaly syndrome.",
        "symptoms": ["edema", "scoliosis", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Nager_acrofacial_dysostosis"
    },
    "Alopecia universalis": {
        "summary": "Alopecia universalis (AU) or alopecia areata universalis is a medical condition involving loss of all hair, including eyebrows and eyelashes. It is an advanced form of alopecia areata.",
        "symptoms": ["edema", "mania", "hair loss", "phobia", "trauma", "deformity", "inflammation", "ptosis", "hirsutism", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Alopecia_universalis"
    },
    "Leukodystrophy": {
        "summary": "Leukodystrophy is one of a group of disorders characterized by degeneration of the white matter in the brain. The word leukodystrophy comes from the Greek roots leuko, \"white\", dys, \"lack of\", and troph, \"growth\". The leukodystrophies are caused by imperfect growth or development of the myelin sheath, the fatty covering that acts as an insulator around nerve fibers.",
        "symptoms": ["akathisia", "edema", "weakness", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "irritability", "sleep apnea", "cough"],
        "url": "https://en.wikipedia.org/wiki/Leukodystrophy"
    },
    "Thanatophoric dysplasia": {
        "summary": "Thanatophoric dysplasia (thanatophoric dwarfism) is a severe skeletal disorder characterized by a disproportionately small ribcage, extremely short limbs and folds of extra skin on the arms and legs.",
        "symptoms": ["difficulty breathing", "seizure", "gas", "asthenia"],
        "url": "https://en.wikipedia.org/wiki/Thanatophoric_dysplasia"
    },
    "Iridogoniodysgenesis, dominant type": {
        "summary": "Iridogoniodysgenesis, dominant type (type 1, IRID1) refers to a spectrum of diseases characterized by malformations of the irido-corneal angle of the anterior chamber of the eye. Iridogoniodysgenesis is the result of abnormal migration or terminal induction of neural crest cells. These cells lead to formation of most of the anterior segment structures of the eye (corneal stroma & endothelium, iris stroma, trabeculum).",
        "symptoms": ["rash", "edema"],
        "url": "https://en.wikipedia.org/wiki/Iridogoniodysgenesis,_dominant_type"
    },
    "Giant-cell tumor of the tendon sheath": {
        "summary": "Giant-cell tumor of the tendon sheath, also known as giant-cell synovioma and localized nodular tenosynovitis, is a firm lesion, measuring 1 to 3\u00a0cm in diameter, and is most commonly attached to the tendons of the fingers, hands, and wrists, with a predilection for the flexor surfaces. Giant-cell tumor of tendon sheaths most often affect the wrist and fingers of males and females from the ages of 20-50 . These tumors are typically painless and can cause cortical erosion. Surgery to remove the tumor is a common treatment, though the tumors tend to recur.",
        "symptoms": ["bleeding", "inflammation"],
        "url": "https://en.wikipedia.org/wiki/Giant-cell_tumor_of_the_tendon_sheath"
    },
    "Beh\u00e7et's disease": {
        "summary": "Beh\u00e7et's disease is a rare immune-mediated small-vessel systemic vasculitis that often presents with mucous membrane ulceration and ocular problems. The disease was named in 1937 after the Turkish dermatologist Hulusi Beh\u00e7et, who first described the triple-symptom complex of recurrent oral aphthous ulcers, genital ulcers, and uveitis \u2013 a disease of the eye. As a systemic disease, it can also involve visceral organs such as the gastrointestinal tract, pulmonary, musculoskeletal, cardiovascular and neurological systems. This syndrome can be fatal due to ruptured vascular aneurysms or severe neurological complications.",
        "symptoms": ["edema", "nausea", "seizure", "fever", "abdominal pain", "cough", "memory loss", "bloating", "pustule", "gas", "myopathy", "confusion", "skin lesion", "abscess", "hemoptysis", "inflammation", "laceration", "infertility", "ptosis", "bleeding", "trauma", "hearing loss", "oral lesions", "mouth ulcers", "abrasion", "myalgia", "loss of vision"],
        "url": "https://en.wikipedia.org/wiki/Beh%C3%A7et%27s_disease"
    },
    "Rapadilino syndrome": {
        "summary": "Rapadilino syndrome is an autosomal recessive congenital disorder characterized by radial and patellar aplasia, short stature, arched or cleft palate, limb malformation, and dislocated joints. It is more prevalent in Finland than elsewhere in the world.",
        "symptoms": ["scoliosis", "deformity", "ataxia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Rapadilino_syndrome"
    },
    "Pigmented villonodular synovitis": {
        "summary": "Pigmented villonodular synovitis (PVNS) is a joint disease characterized by inflammation and overgrowth of the joint lining. It usually affects the hip or knee. It can also occur in the shoulder, ankle, elbow, hand or foot. In PVNS the lining of the joint, called the synovium, becomes swollen and grows. This growth harms the bone next to the joint. The lining also makes extra fluid that can cause swelling and make movement painful. PVNS is idiopathic, it doesn't seem to run in families or be caused by certain jobs or activities. Surgery can help but, even with treatment, PVNS comes back about half the time. If the pain remains then radiation therapy may help. In the worst cases the joint must be replaced.",
        "symptoms": ["trauma", "swelling", "inflammation", "fever", "myalgia", "bleeding"],
        "url": "https://en.wikipedia.org/wiki/Pigmented_villonodular_synovitis"
    },
    "Autosomal dominant hypophosphatemic rickets": {
        "summary": "Autosomal dominant hypophosphatemic rickets (ADHR) is a rare hereditary disease in which excessive loss of phosphate in the urine leads to poorly formed bones (rickets), bone pain, and tooth abscesses. ADHR is caused by a mutation in the fibroblast growth factor 23 (FGF23). ADHR affects men and women equally; symptoms may become apparent at any point from childhood through early adulthood. Blood tests reveal low levels of phosphate (hypophosphatemia) and inappropriately normal levels of vitamin D.[citation needed] Occasionally, hypophosphatemia may improve over time as urine losses of phosphate partially correct.[citation needed]",
        "symptoms": ["abscess"],
        "url": "https://en.wikipedia.org/wiki/Autosomal_dominant_hypophosphatemic_rickets"
    },
    "Fumarase deficiency": {
        "summary": "Fumarase deficiency (or fumaric aciduria), also known as \"Polygamist Down's\", is an autosomal recessive metabolic disorder characterized by a deficiency of the enzyme fumarate hydratase, which is indicated by a buildup of fumaric acid in the urine.",
        "symptoms": ["seizure"],
        "url": "https://en.wikipedia.org/wiki/Fumarase_deficiency"
    },
    "Giant platelet disorder": {
        "summary": "Giant platelet disorders are rare disorders featuring abnormally large platelets, thrombocytopenia and a tendency to bleeding. Giant platelets cannot stick adequately to an injured blood vessel walls, resulting in abnormal bleeding when injured. Giant platelet disorder occurs for inherited diseases like Bernard-Soulier syndrome, gray platelet syndrome and May-Hegglin anomaly.",
        "symptoms": ["epistaxis", "bleeding", "trauma", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Giant_platelet_disorder"
    },
    "Zellweger syndrome": {
        "summary": "Zellweger syndrome, also called cerebrohepatorenal syndrome, is a rare congenital disorder characterized by the reduction or absence of functional peroxisomes in the cells of an individual. It is one of a family of disorders called leukodystrophies. Zellweger syndrome is named after Hans Zellweger (1909\u20131990), a Swiss-American pediatrician, a professor of pediatrics and genetics at the University of Iowa who researched this disorder.",
        "symptoms": ["seizure", "apnea", "gas", "edema"],
        "url": "https://en.wikipedia.org/wiki/Zellweger_syndrome"
    },
    "Young's syndrome": {
        "summary": "Young's syndrome, also known as azoospermia sinopulmonary infections, sinusitis-infertility syndrome and Barry-Perkins-Young syndrome, is a rare condition that encompasses a combination of syndromes such as bronchiectasis, rhinosinusitis and reduced fertility. In individuals with this syndrome, the functioning of the lungs is usually normal but the mucus is abnormally viscous. The reduced fertility (azoospermia) is due to functional obstruction of sperm transport down the genital tract at the epididymis where the sperms are found in viscous, lipid-rich fluid. The syndrome was named after Donald Young, the urologist who first made observations of the clinical signs of the syndrome in 1972. There have been several studies undertaken suggesting that contact with mercury might cause the syndrome. A variant of Young's syndrome has been observed in an individual, showing slightly different signs and symptoms.",
        "symptoms": ["infertility", "sterility"],
        "url": "https://en.wikipedia.org/wiki/Young%27s_syndrome"
    },
    "MASA syndrome": {
        "summary": "MASA syndrome, also called CRASH syndrome, Gareis-Mason syndrome, L1 syndrome, spastic paraplegia 1 is a rare X-linked recessive neurological disorder.",
        "symptoms": ["aphasia", "rash", "blindness", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/MASA_syndrome"
    },
    "Benedikt syndrome": {
        "summary": "Benedikt syndrome, also called Benedikt's syndrome or paramedian midbrain syndrome, is a rare type of posterior circulation stroke of the brain, with a range of neurological symptoms affecting the midbrain, cerebellum and other related structures.",
        "symptoms": ["blindness", "deafness", "aphasia", "tremors", "tremor", "ataxia", "alexia", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Benedikt_syndrome"
    },
    "Lelis syndrome": {
        "summary": "Lelis syndrome it is a genetic disorder, a rare condition with dermatological and dental findings characterized by the association of ectodermal dysplasia (hypotrichosis and hypohidrosis) with acanthosis nigricans. Other clinical features may include palmoplantar hyperkeratosis, nail dystrophy, intellectual deficit, disturbances of skin pigmentation (perioral and periorbital hyperpigmentation, vitiligo, and perinevic leukoderma) and hypodontia. Transmission is autosomal recessive.",
        "symptoms": ["edema", "urticaria", "hyperpigmentation"],
        "url": "https://en.wikipedia.org/wiki/Lelis_syndrome"
    },
    "Schnitzler syndrome": {
        "summary": "Schnitzler syndrome is a rare disease characterised by chronic hives (urticaria) and periodic fever, bone pain and joint pain (sometimes with joint inflammation), weight loss, malaise, fatigue, swollen lymph glands and enlarged spleen and liver.",
        "symptoms": ["joint pain", "edema", "skin lesion", "inflammation", "rash", "fever", "malaise", "urticaria", "itching", "fatigue", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Schnitzler_syndrome"
    },
    "Prurigo pigmentosa": {
        "summary": "Prurigo pigmentosa is a rare skin condition of unknown cause, characterized by the sudden onset of erythematous papules that leave a reticulated hyperpigmentation when they heal.:57",
        "symptoms": ["rash", "skin lesion", "gas", "hyperpigmentation"],
        "url": "https://en.wikipedia.org/wiki/Prurigo_pigmentosa"
    },
    "Orofaciodigital syndrome 1": {
        "summary": "Orofaciodigital syndrome 1 (OFD1), also called Papillon-League and Psaume syndrome, is an X-linked congenital disorder characterized by malformations of the face, oral cavity, and digits with polycystic kidney disease and variable involvement of the central nervous system.",
        "symptoms": ["blindness", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Orofaciodigital_syndrome_1"
    },
    "Trichothiodystrophy": {
        "summary": "Trichothiodystrophy (TTD) is an autosomal recessive inherited disorder characterised by brittle hair and intellectual impairment. The word breaks down into tricho \u2013 \"hair\", thio \u2013 \"sulphur\", and dystrophy \u2013 \"wasting away\" or literally \"bad nourishment\". TTD is associated with a range of symptoms connected with organs of the ectoderm and neuroectoderm. TTD may be subclassified into four syndromes: Approximately half of all patients with trichothiodystrophy have photosensitivity, which divides the classification into syndromes with or without photosensitivity; BIDS and PBIDS, and IBIDS and PIBIDS. Modern covering usage is TTD-P (photosensitive), and TTD.",
        "symptoms": ["ataxia", "skin lesion"],
        "url": "https://en.wikipedia.org/wiki/Trichothiodystrophy"
    },
    "Superior mesenteric artery syndrome": {
        "summary": "Superior mesenteric artery (SMA) syndrome is a gastro-vascular disorder in which the third and final portion of the duodenum is compressed between the abdominal aorta (AA) and the overlying superior mesenteric artery. This rare, potentially life-threatening syndrome is typically caused by an angle of 6\u00b0-25\u00b0 between the AA and the SMA, in comparison to the normal range of 38\u00b0-56\u00b0, due to a lack of retroperitoneal and visceral fat (mesenteric fat). In addition, the aortomesenteric distance is 2-8 millimeters, as opposed to the typical 10-20. However, a narrow SMA angle alone is not enough to make a diagnosis, because patients with a low BMI, most notably children, have been known to have a narrow SMA angle with no symptoms of SMA syndrome.",
        "symptoms": ["nausea", "claudication", "abdominal pain", "liver failure", "cachexia", "loss of appetite", "scoliosis", "melena", "gas", "dyspepsia", "confusion", "abscess", "inflammation", "dehydration", "vomiting", "hypotension", "ptosis", "weight gain", "bleeding", "cirrhosis", "weight loss", "steatorrhea", "trauma", "constipation", "depression"],
        "url": "https://en.wikipedia.org/wiki/Superior_mesenteric_artery_syndrome"
    },
    "Gray platelet syndrome": {
        "summary": "Gray platelet syndrome (GPS), or platelet alpha-granule deficiency, is a rare congenital autosomal recessive bleeding disorder caused by a reduction or absence of alpha-granules in blood platelets, and the release of proteins normally contained in these granules into the marrow, causing myelofibrosis.",
        "symptoms": ["asthenia", "bleeding"],
        "url": "https://en.wikipedia.org/wiki/Gray_platelet_syndrome"
    },
    "Hereditary multiple exostoses": {
        "summary": "Hereditary multiple exostoses (HME or MHE), also known as diaphyseal aclasis, is a rare medical condition in which multiple bony spurs or lumps (also known as exostoses, or osteochondromas) develop on the bones of a child. HME is synonymous with multiple hereditary exostoses and multiple osteochondromatosis, which is the preferred term used by the World Health Organization.",
        "symptoms": ["irritation", "fatigue", "paralysis", "deformity", "numbness"],
        "url": "https://en.wikipedia.org/wiki/Hereditary_multiple_exostoses"
    },
    "Gerodermia osteodysplastica": {
        "summary": "Gerodermia osteodysplastica (GO), also called geroderma osteodysplasticum and Walt Disney dwarfism, is a rare autosomal recessive connective tissue disorder included in the spectrum of cutis laxa syndromes.",
        "symptoms": ["scoliosis", "edema", "urticaria", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Gerodermia_osteodysplastica"
    },
    "Progeria": {
        "summary": "Progeria is an extremely rare genetic disorder in which symptoms resembling aspects of aging are manifested at a very early age. Progeria is one of several progeroid syndromes. The word progeria comes from the Greek words \"pro\" (\u03c0\u03c1\u03cc), meaning \"before\" or \"premature\", and \"g\u0113ras\" (\u03b3\u1fc6\u03c1\u03b1\u03c2), meaning \"old age\". The disorder has a very low incidence rate. Those born with progeria typically live to their mid teens to early twenties.[10] It is a genetic condition that occurs as a new mutation, and is rarely inherited, as carriers usually do not live to reproduce. Although the term progeria applies strictly speaking to all diseases characterized by premature aging symptoms, and is often used as such, it is often applied specifically in reference to Hutchinson\u2013Gilford progeria syndrome (HGPS).",
        "symptoms": ["edema", "hair loss", "stings", "alopecia", "ataxia", "weight gain", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Progeria"
    },
    "Nasodigitoacoustic syndrome": {
        "summary": "Nasodigitoacoustic syndrome, also called Keipert syndrome, is a rare congenital syndrome first described by J.A. Keipert and colleagues in 1973. The syndrome is characterized by a mishaped nose, broad thumbs and halluces (the big toes), brachydactyly, sensorineural hearing loss, facial features such as hypertelorism (unusually wide-set eyes), and developmental delay. It is believed to be inherited in an X-linked recessive manner, which means a genetic mutation causing the disorder is located on the X chromosome, and while two copies of the mutated gene must be inherited for a female to be born with the disorder, just one copy is sufficient to cause a male to be born with the disorder. Nasodigitoacoustic syndrome is likely caused by a mutated gene located on the X chromosome between positions Xq22.2\u2013q28. The incidence of the syndrome has not been determined, but it is considered to affect less than 200,000 people in the United States, and no greater than 1 per 2,000 in Europe. It is similar to Keutel, Muenke, Rubinstein and Teunissen-Cremers syndrome.",
        "symptoms": ["hoarse voice", "blindness", "hyperactivity", "dyspnea", "deafness", "aggressive behavior", "swelling", "hearing loss", "depressed", "shortness of breath", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Nasodigitoacoustic_syndrome"
    },
    "Niemann\u2013Pick disease, type C": {
        "summary": "Niemann\u2013Pick type C is a lysosomal storage disease associated with mutations in NPC1 and NPC2 genes. Niemann\u2013Pick type C affects an estimated 1:150,000 people. Approximately 50% of cases present before 10 years of age, but manifestations may first be recognized as late as the sixth decade.",
        "symptoms": ["aching", "mania", "hallucination", "jaundice", "stings", "paralysis", "dysarthria", "hearing loss", "delusion", "slurred speech", "depression", "cataplexy", "tremor", "ataxia", "ptosis", "gas", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Niemann%E2%80%93Pick_disease,_type_C"
    },
    "Motor neuron disease": {
        "summary": "A motor neuron disease (MND) is any of several neurological disorders that selectively affect motor neurons, the cells that control voluntary muscles of the body. They include amyotrophic lateral sclerosis (ALS), primary lateral sclerosis (PLS), progressive muscular atrophy (PMA), progressive bulbar palsy (PBP) and pseudobulbar palsy; spinal muscular atrophies are also sometimes included in the group. They are neurodegenerative in nature and cause increasing disability and eventually, death.",
        "symptoms": ["akathisia", "edema", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea"],
        "url": "https://en.wikipedia.org/wiki/Motor_neuron_disease"
    },
    "Ichthyosis hystrix": {
        "summary": "Ichthyosis hystrix is a group of rare skin disorders in the ichthyosis family of skin disorders characterized by massive hyperkeratosis with an appearance like spiny scales. This term is also used to refer to a type of epidermal nevi with extensive bilateral distribution.",
        "symptoms": ["edema", "deafness", "seizure", "hearing loss", "hyperthermia", "urticaria", "ataxia", "blister", "cirrhosis", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Ichthyosis_hystrix"
    },
    "Popliteal pterygium syndrome": {
        "summary": "Popliteal pterygium syndrome (PPS) is an inherited condition affecting the face, limbs, and genitalia. The syndrome goes by a number of names including the popliteal web syndrome and, more inclusively, the facio-genito-popliteal syndrome. The term PPS was coined by Gorlin et al.. in 1968 on the basis of the most unusual anomaly, the popliteal pterygium (a web behind the knee).",
        "symptoms": ["rash", "brittle nails", "edema"],
        "url": "https://en.wikipedia.org/wiki/Popliteal_pterygium_syndrome"
    },
    "Central hypoventilation syndrome": {
        "summary": "Central hypoventilation syndrome (CHS) is a respiratory disorder that results in respiratory arrest during sleep. CHS can either be congenital (CCHS) or acquired (ACHS) later in life. It is fatal if untreated. It is also known by Ondine's curse.",
        "symptoms": ["edema", "aphasia", "seizure", "insomnia", "headache", "sleep apnea", "gas", "abscess", "inflammation", "obesity", "hypotension", "paralysis", "akathisia", "apnea", "trauma", "hypoventilation", "sleep disorders", "snoring", "cataplexy", "tremor", "ataxia", "fatigue", "somnolence", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Central_hypoventilation_syndrome"
    },
    "Macrophagic myofasciitis": {
        "summary": "Macrophagic Myofasciitis, or MMF, is a rare muscle disease identified in 1993. The disease is characterized by microscopic lesions found in muscle biopsies that show infiltration of muscle tissue by PAS-positive macrophages. Specific causes of MMF are unknown. Intramuscular injections aluminium-containing vaccines have been implicated. Many of those affected with the disease had previously been treated for malaria with chloroquine or hydroxychloroquine.",
        "symptoms": ["joint pain", "fever", "fatigue", "weakness", "muscle weakness"],
        "url": "https://en.wikipedia.org/wiki/Macrophagic_myofasciitis"
    },
    "Susac's syndrome": {
        "summary": "Susac's syndrome (Retinocochleocerebral Vasculopathy) is a microangiopathy characterized by encephalopathy, branch retinal artery occlusions and hearing loss. The cause is unknown but the current thinking is that antibodies are produced against endothelial cells in tiny arteries which leads to damage and the symptoms related to the illness. Despite this being a rare disease, there are 4 registries collecting data on the illness; two are in the United States, one is in Germany and the fourth is in Portugal.",
        "symptoms": ["akathisia", "edema", "paranoia", "abscess", "aphasia", "seizure", "insomnia", "inflammation", "hearing loss", "hypoventilation", "sleep disorders", "tinnitus", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea", "impaired vision", "gas"],
        "url": "https://en.wikipedia.org/wiki/Susac%27s_syndrome"
    },
    "Halo nevus": {
        "summary": "Halo nevus (also known as \"Leukoderma acquisitum centrifugum,\" \"Perinevoid vitiligo,\" and \"Sutton nevus\":689) is a mole that is surrounded by a depigmented ring or 'halo'.",
        "symptoms": ["claudication", "gas", "inflammation", "hypotension"],
        "url": "https://en.wikipedia.org/wiki/Halo_nevus"
    },
    "Pseudohypoparathyroidism": {
        "summary": "Pseudohypoparathyroidism is a condition associated primarily with resistance to the parathyroid hormone. Those with the condition have a low serum calcium and high phosphate, but the parathyroid hormone level (PTH) is actually appropriately high (due to the low level of calcium in the blood). Its pathogenesis has been linked to dysfunctional G Proteins (in particular, Gs alpha subunit). The condition is extremely rare, with an estimated overall prevalence of 7.2/1,000,000 or approximately 1/140000.",
        "symptoms": ["edema", "asthenia", "seizure", "obesity", "depressed", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Pseudohypoparathyroidism"
    },
    "Alexander disease": {
        "summary": "Alexander disease, also known as fibrinoid leukodystrophy, is a progressive and fatal neurodegenerative disease. It is a rare genetic disorder and mostly affects infants and children, causing developmental delay and changes in physical characteristics.",
        "symptoms": ["akathisia", "edema", "insomnia", "abscess", "aphasia", "seizure", "cirrhosis", "inflammation", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Alexander_disease"
    },
    "Northern epilepsy syndrome": {
        "summary": "Northern epilepsy syndrome or progressive epilepsy with mental retardation (EPMR) is a subtype of neuronal ceroid lipofuscinosis and a rare disease that is regarded as a Finnish heritage disease. Unlike most Finnish heritage diseases, this syndrome has been reported only in Finland. The disease is characterized by seizures in early childhood that progressively get worse until after puberty. Once the onset of seizures occurs, mental degradation is seen. This continues into adulthood even after seizure frequency has decreased. The cause of the disease is a missense mutation in chromosome 8. The creation of a new protein occurs and the lipid content of the brain is altered because of it. The ratio of the mutation carriers is 1:135. There is nothing that has been found to stop the progression of the disease, but symptomatic approaches, such as the use of benzodiazepines, have helped control seizures.",
        "symptoms": ["loss of consciousness", "seizure", "convulsions", "loss of vision", "depression"],
        "url": "https://en.wikipedia.org/wiki/Northern_epilepsy_syndrome"
    },
    "Gomez and L\u00f3pez-Hern\u00e1ndez syndrome": {
        "summary": "Gomez-Lopez-Hernandez Syndrome (GLH) or cerebellotrigeminal-dermal dysplasia is a rare neurocutaneous(Phakomatosis) disorder affecting the trigeminal nerve and causing several other neural and physical abnormalities. Gomez-Lopez-Hernandez Syndrome has been diagnosed in only 34 people. Cases of Gomez-Lopez-Hernandez Syndrome may be under-reported as other diseases share the characteristics of cerebellar malformation shown in Gomez-Lopez-Hernandez Syndrome. Gomez-Lopez-Hernandez Syndrome was first characterized in 1979.",
        "symptoms": ["seizure", "anxiety", "fever", "insomnia", "irritability", "ataxia", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Gomez_and_L%C3%B3pez-Hern%C3%A1ndez_syndrome"
    },
    "Endocardial fibroelastosis": {
        "summary": "Endocardial Fibroelastosis (EFE) is a rare heart disorder usually occurring in children two years old and younger. It may also be considered a reaction to stress, not necessarily a specific disease.",
        "symptoms": ["tachycardia", "arrhythmia", "bradycardia", "fever", "depression", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Endocardial_fibroelastosis"
    },
    "Potocki\u2013Lupski syndrome": {
        "summary": "Potocki\u2013Lupski syndrome (PTLS), also known as dup(17)p11.2p11.2 syndrome, trisomy 17p11.2 or duplication 17p11.2 syndrome, is a contiguous gene syndrome involving the microduplication of band 11.2 on the short arm of human chromosome 17 (17p11.2). The duplication was first described as a case study in 1996. In 2000, the first study of the disease was released, and in 2007, enough patients had been gathered to complete a comprehensive study and give it a detailed clinical description. PTLS is named for two researchers involved in the latter phases, Drs. Lorraine Potocki and James R. Lupski of Baylor College of Medicine.",
        "symptoms": ["sleep apnea", "anxiety"],
        "url": "https://en.wikipedia.org/wiki/Potocki%E2%80%93Lupski_syndrome"
    },
    "Gourmand syndrome": {
        "summary": "Gourmand syndrome is a rare, benign condition that sometimes occurs in people who sustain injuries to the right frontal lobe. These people develop a new, post-injury passion for gourmet food. It was first described by Regard and Landis in the journal Neurology. It is characterized by a right hemisphere brain lesion and a obsessive focus on eating, thinking, talking, and writing about fine foods. However, it is not associated with an increase in appetite.",
        "symptoms": ["head injury", "trauma", "laceration"],
        "url": "https://en.wikipedia.org/wiki/Gourmand_syndrome"
    },
    "Upington disease": {
        "summary": "Upington disease, also called Perthes-like hip disease, enchondromata, ecchondromata, and familial dyschondroplasia, is an extremely rare autosomal dominant malformation disorder. It has only one published source claiming its existence in three generations of one family from South Africa.",
        "symptoms": ["scoliosis", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Upington_disease"
    },
    "Osteopetrosis": {
        "summary": "Osteopetrosis, literally \"stone bone\", also known as marble bone disease and Albers-Sch\u00f6nberg disease, is an extremely rare inherited disorder whereby the bones harden, becoming denser, in contrast to more prevalent conditions like osteoporosis, in which the bones become less dense and more brittle, or osteomalacia, in which the bones soften. Osteopetrosis can cause bones to dissolve and break.",
        "symptoms": ["blindness", "deformity", "deafness", "asthenia", "seizure", "paralysis", "scoliosis", "hyperthermia", "ataxia", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Osteopetrosis"
    },
    "Apert syndrome": {
        "summary": "Apert syndrome is a form of acrocephalosyndactyly, a congenital disorder characterized by malformations of the skull, face, hands and feet. It is classified as a branchial arch syndrome, affecting the first branchial (or pharyngeal) arch, the precursor of the maxilla and mandible. Disturbances in the development of the branchial arches in fetal development create lasting and widespread effects.",
        "symptoms": ["edema", "deformity", "asthenia", "hearing loss", "ptosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Apert_syndrome"
    },
    "Wiskott\u2013Aldrich syndrome": {
        "summary": "Wiskott\u2013Aldrich syndrome (WAS) is a rare X-linked recessive disease characterized by eczema, thrombocytopenia (low platelet count), immune deficiency, and bloody diarrhea (secondary to the thrombocytopenia). It is also sometimes called the eczema-thrombocytopenia-immunodeficiency syndrome in keeping with Aldrich's original description in 1954. The WAS-related disorders of X-linked thrombocytopenia (XLT) and X-linked congenital neutropenia (XLN) may present similar but less severe symptoms and are caused by mutations of the same gene.",
        "symptoms": ["boil", "edema", "mania", "blindness", "bleeding", "abscess", "bloody diarrhea", "insect bite", "rash", "urticaria", "hyperpigmentation", "ataxia", "frequent infection", "cirrhosis", "blister", "alopecia", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Wiskott%E2%80%93Aldrich_syndrome"
    },
    "Cockayne syndrome": {
        "summary": "Cockayne syndrome (CS), also called Neill-Dingwall syndrome, is a rare and fatal autosomal recessive neurodegenerative disorder characterized by growth failure, impaired development of the nervous system, abnormal sensitivity to sunlight (photosensitivity), eye disorders and premature aging. Failure to thrive and neurological disorders are criteria for diagnosis, while photosensitivity, hearing loss, eye abnormalities, and cavities are other very common features. Problems with any or all of the internal organs are possible. It is associated with a group of disorders called leukodystrophies, which are conditions characterized by degradation of neurological white matter. The underlying disorder is a defect in a DNA repair mechanism. Unlike other defects of DNA repair, patients with CS are not predisposed to cancer or infection. Cockayne syndrome is a rare but destructive disease usually resulting in death within the first or second decade of life. The mutation of specific genes in Cockayne syndrome is known, but the widespread effects and its relationship with DNA repair is yet to be well understood.",
        "symptoms": ["edema", "hearing loss", "nystagmus", "hyperpigmentation", "ataxia", "gas", "blister"],
        "url": "https://en.wikipedia.org/wiki/Cockayne_syndrome"
    },
    "Hypokalemic periodic paralysis": {
        "summary": "Hypokalemic periodic paralysis (hypoKPP) is a rare, autosomal dominant channelopathy characterized by muscle weakness or paralysis with a matching fall in potassium levels in the blood (primarily due to defect in a voltage-gated calcium channel). In individuals with this mutation, attacks often begin in adolescence and most commonly occur on awakening or after sleep or rest following strenuous exercise (attacks during exercise are rare), high carbohydrate meals, meals with high sodium content, sudden changes in temperature, and even excitement, noise, flashing lights and induced by cold temperatures. Weakness may be mild and limited to certain muscle groups, or more severe full-body paralysis. During an attack reflexes may be decreased or absent. Attacks may last for a few hours or persist for several days. Recovery is usually sudden when it occurs, due to release of potassium from swollen muscles as they recover. Some patients may fall into an abortive attack or develop chronic muscle weakness later in life.",
        "symptoms": ["muscle weakness", "weakness", "deafness", "asthenia", "seizure", "breathing problems", "arrhythmia", "hyperthermia", "ataxia", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Hypokalemic_periodic_paralysis"
    },
    "Spastic ataxia-corneal dystrophy syndrome": {
        "summary": "Spastic ataxia-corneal dystrophy syndrome (also known as Bedouin spastic ataxia syndrome) is an autosomally resessive disease. It has been found in an inbred Bedouin family. It was first described in 1986. A member of the family who was first diagnosed with this disease also had Bartter syndrome. It was concluded by its first descriptors Mousa-Al et al. that the disease is different from a disease known as corneal-cerebellar syndrome that had been found in 1985.",
        "symptoms": ["ataxia"],
        "url": "https://en.wikipedia.org/wiki/Spastic_ataxia-corneal_dystrophy_syndrome"
    },
    "Dahlberg Borer Newcomer syndrome": {
        "summary": "Dahlberg Borer Newcomer syndrome is a rare autosomal X-linked recessive genetic condition characterized by a prolapse of the bicuspid valve, progressive kidney failure, congenital lymphedema, hypoparathyroidism, and very short end bones of fingers. Treatment for this condition is based on its symptoms. These treatments may include manual lymphatic drainage, consumption of beta blockers or anticoagulants for the bicuspid valve prolapse and vitamin D or calcium carbonate tablets for the hypoparathyroidism.",
        "symptoms": ["edema"],
        "url": "https://en.wikipedia.org/wiki/Dahlberg_Borer_Newcomer_syndrome"
    },
    "Benign symmetric lipomatosis": {
        "summary": "Benign symmetric lipomatosis (also known as Benign symmetric lipomatosis of Launois\u2013Bensaude, Madelung's disease, multiple symmetric lipomatosis, and cephalothoracic lipodystrophy) is a cutaneous condition characterized by extensive symmetric fat deposits in the head, neck, and shoulder girdle area. The German surgeon Otto Wilhelm Madelung was the first to give a detailed description of the disorder. This condition is very rare, with an estimated incidence rate of 1 in 25,000, and affects males up to 30 times more frequently than females.",
        "symptoms": ["alcohol abuse", "deformity"],
        "url": "https://en.wikipedia.org/wiki/Benign_symmetric_lipomatosis"
    },
    "Slipped capital femoral epiphysis": {
        "summary": "Slipped capital femoral epiphysis (SCFE or skiffy, slipped upper femoral epiphysis, SUFE or souffy, coxa vara adolescentium) is a medical term referring to a fracture through the growth plate (physis), which results in slippage of the overlying end of the femur (epiphysis). Normally, the head of the femur, called the capital, should sit squarely on the femoral neck. Abnormal movement along the growth plate results in the slip. The femoral epiphysis remains in the acetabulum (hip socket), while the metaphysis (end of the femur) move in an anterior direction with external rotation.",
        "symptoms": ["overweight", "chronic pain", "weakness", "groin pain", "trauma", "thigh pain", "obesity", "knee pain", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Slipped_capital_femoral_epiphysis"
    },
    "Congenital stromal corneal dystrophy": {
        "summary": "Congenital stromal corneal dystrophy (CSCD), also called Witschel dystrophy, is an extremely rare, autosomal dominant form of corneal dystrophy. Only 4 families have been reported to have the disease by 2009. The main features of the disease are numerous opaque flaky or feathery areas of clouding in the stroma that multiply with age and eventually preclude visibility of the endothelium. Strabismus or primary open angle glaucoma was noted in some of the patients. Thickness of the cornea stays the same, Descemet's membrane and endothelium are relatively unaffected, but the fibrills of collagen that constitute stromal lamellae are reduced in diameter and lamellae themselves are packed significantly more tightly.",
        "symptoms": ["myopathy"],
        "url": "https://en.wikipedia.org/wiki/Congenital_stromal_corneal_dystrophy"
    },
    "Atypical trigeminal neuralgia": {
        "summary": "Atypical trigeminal neuralgia (ATN), or type 2 trigeminal neuralgia, is a form of trigeminal neuralgia, a disorder of the fifth cranial nerve. This form of nerve pain is difficult to diagnose, as it is rare and the symptoms overlap with several other disorders. The symptoms can occur in addition to having migraine headache, or can be mistaken for migraine alone, or dental problems such as temporomandibular joint disorder or musculoskeletal issues. ATN can have a wide range of symptoms and the pain can fluctuate in intensity from mild aching to a crushing or burning sensation, and also to the extreme pain experienced with the more common trigeminal neuralgia.",
        "symptoms": ["nerve pain", "aching", "chronic pain", "dental problem", "abscess", "tooth pain", "nausea", "seizure", "anxiety", "inflammation", "headache", "depression"],
        "url": "https://en.wikipedia.org/wiki/Atypical_trigeminal_neuralgia"
    },
    "Hand-foot-genital syndrome": {
        "summary": "Hand-foot-genital syndrome (HFGS) is characterized by limb malformations and urogenital defects. Mild bilateral shortening of the thumbs and great toes, caused primarily by shortening of the distal phalanx and/or the first metacarpal or metatarsal, is the most common limb malformation and results in impaired dexterity or apposition of the thumbs. Urogenital abnormalities include abnormalities of the ureters and urethra and various degrees of incomplete M\u00fcllerian fusion in females and hypospadias of variable severity with or without chordee in males. Vesicoureteral reflux, recurrent urinary tract infections, and chronic pyelonephritis are common; fertility is normal.",
        "symptoms": ["urinary incontinence", "weakness", "retrograde ejaculation", "incontinence"],
        "url": "https://en.wikipedia.org/wiki/Hand-foot-genital_syndrome"
    },
    "Birdshot chorioretinopathy": {
        "summary": "Birdshot chorioretinopathy is a rare form of bilateral posterior uveitis affecting the eye. It causes severe, progressive inflammation of both the choroid and retina.",
        "symptoms": ["red eye", "diplopia", "edema", "phobia", "blindness", "inflammation", "nystagmus", "blurred vision", "exophthalmos", "ptosis"],
        "url": "https://en.wikipedia.org/wiki/Birdshot_chorioretinopathy"
    },
    "Propionic acidemia": {
        "summary": "Propionic acidemia, also known as propionic aciduria, propionyl-CoA carboxylase deficiency and ketotic glycinemia, is an autosomal recessive metabolic disorder, classified as a branched-chain organic acidemia.",
        "symptoms": ["dehydration", "seizure", "vomiting", "lethargy", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Propionic_acidemia"
    },
    "Cherubism": {
        "summary": "Cherubism is a rare genetic disorder that causes prominence in the lower portion in the face. The name is derived from the temporary chubby-cheeked resemblance to putti, often confused with cherubs, in Renaissance paintings.",
        "symptoms": ["diplopia", "dental problem", "deformity", "trauma", "swelling", "inflammation", "depressed", "ptosis", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Cherubism"
    },
    "Scleroderma": {
        "summary": "Scleroderma is a long term autoimmune disease that results in hardening of the skin. In the more severe form, it also affects internal organs. The cause is unknown. The underlying mechanism involves the body's immune system attacking healthy tissues. There is a strong association with certain mutations in HLA genes. Environmental factors have also been implicated.",
        "symptoms": ["edema", "weakness", "cough", "boil", "loss of appetite", "acid reflux", "swelling", "insect bite", "headache", "chest pain", "hyperpigmentation", "muscle weakness", "bloating", "gas", "myopathy", "skin lesion", "abscess", "vomiting", "paresthesia", "urticaria", "ptosis", "cirrhosis", "weight loss", "dyspareunia", "alopecia", "mania", "palpitation", "hearing loss", "constipation", "arrhythmia", "muscle aches", "rash", "shortness of breath", "paresthesias", "myalgia", "fatigue", "blister"],
        "url": "https://en.wikipedia.org/wiki/Scleroderma"
    },
    "Mowat\u2013Wilson syndrome": {
        "summary": "Mowat\u2013Wilson syndrome is a rare genetic disorder that was clinically delineated by Dr. D. R. Mowat and Dr. M. J. Wilson in 1998.",
        "symptoms": ["seizure", "rash", "depression", "edema"],
        "url": "https://en.wikipedia.org/wiki/Mowat%E2%80%93Wilson_syndrome"
    },
    "Malpuech facial clefting syndrome": {
        "summary": "Malpuech facial clefting syndrome, also called Malpuech syndrome or Gypsy type facial clefting syndrome, is a rare congenital syndrome. It is characterized by facial clefting (any type of cleft in the bones and tissues of the face, including a cleft lip and palate), a caudal appendage (a \"human tail\"), growth deficiency, intellectual and developmental disability, and abnormalities of the renal system (kidneys) and the male genitalia. Abnormalities of the heart, and other skeletal malformations may also be present. The syndrome was initially described by Guilliaume Malpuech and associates in 1983. It is thought to be genetically related to Juberg-Hayward syndrome. Malpuech syndrome has also been considered as part of a spectrum of congenital genetic disorders associated with similar facial, urogenital and skeletal anomalies. Termed \"3MC syndrome\", this proposed spectrum includes Malpuech, Michels and Mingarelli-Carnevale (OSA) syndromes. Mutations in the COLLEC11 and MASP1 genes are believed to be a cause of these syndromes. The incidence of Malpuech syndrome is unknown. The pattern of inheritance is autosomal recessive, which means a defective (mutated) gene associated with the syndrome is located on an autosome, and the syndrome occurs when two copies of this defective gene are inherited.[10]",
        "symptoms": ["skeletal malformation", "loss of inhibition", "hyperactivity", "aggression", "inflammation", "hearing loss", "scoliosis", "skeletal malformations", "ptosis"],
        "url": "https://en.wikipedia.org/wiki/Malpuech_facial_clefting_syndrome"
    },
    "Johanson\u2013Blizzard syndrome": {
        "summary": "Johanson\u2013Blizzard syndrome (JBS) is a rare, sometimes fatal autosomal recessive multisystem congenital disorder featuring abnormal development of the pancreas, nose and scalp, with mental retardation, hearing loss and growth failure. It is sometimes described as a form of ectodermal dysplasia.",
        "symptoms": ["deafness", "high blood pressure", "hearing loss", "tremor", "ataxia", "ptosis", "cirrhosis", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Johanson%E2%80%93Blizzard_syndrome"
    },
    "Glucagonoma": {
        "summary": "A glucagonoma is a rare tumor of the alpha cells of the pancreas that results in the overproduction of the hormone glucagon. Alpha cell tumors are commonly associated with glucagonoma syndrome, though similar symptoms are present in cases of pseudoglucagonoma syndrome in the absence of a glucagon-secreting tumor.",
        "symptoms": ["blister", "swelling", "gas", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Glucagonoma"
    },
    "Iminoglycinuria": {
        "summary": "Iminoglycinuria, sometimes called familial iminoglycinuria, is an autosomal recessive disorder of renal tubular transport affecting reabsorption of the amino acid glycine, and the imino acids proline and hydroxyproline. This results in excess urinary excretion of all three acids (-uria denotes \"in the urine\").",
        "symptoms": ["blindness", "deafness", "mania", "inflammation", "ataxia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Iminoglycinuria"
    },
    "Febrile neutrophilic dermatosis": {
        "summary": "Sweet's syndrome lesions with the classical form of the dermatosis.",
        "symptoms": ["skin lesion", "swelling", "rash", "fever", "urticaria", "blister"],
        "url": "https://en.wikipedia.org/wiki/Febrile_neutrophilic_dermatosis"
    },
    "Hagemoser\u2013Weinstein\u2013Bresnick syndrome": {
        "summary": "Hagemoser\u2013Weinstein\u2013Bresnick syndrome is an autosomal dominant genetic disorder first described by Hagemoser et al. in 1989. It is characterized by optic atrophy followed shortly by loss of hearing and peripheral neuropathy. Onset of the disease occurred in early childhood, as opposed to the later onset of similar diseases. Optic atrophy occurs in the first year and the following symptoms show up before thirteen years. A possible autosomal recessive form of this disease was described in 1970 by Iwashita et al.",
        "symptoms": ["hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Hagemoser%E2%80%93Weinstein%E2%80%93Bresnick_syndrome"
    },
    "Genitopatellar syndrome": {
        "summary": "Genitopatellar syndrome is a rare disorder with characteristic craniofacial features, congenital flexion contractures of the lower limbs, absent or abnormal patellae, urogenital anomalies, and severe psychomotor retardation.",
        "symptoms": ["gas", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Genitopatellar_syndrome"
    },
    "Coffin\u2013Lowry syndrome": {
        "summary": "Coffin\u2013Lowry syndrome is a genetic disorder that is X-linked dominant and which causes severe mental problems sometimes associated with abnormalities of growth, cardiac abnormalities, kyphoscoliosis, as well as auditory and visual abnormalities.",
        "symptoms": ["blindness", "scoliosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Coffin%E2%80%93Lowry_syndrome"
    },
    "Giant axonal neuropathy": {
        "summary": "Giant axonal neuropathy is a rare, autosomal recessive neurological disorder that causes disorganization of neurofilaments. Neurofilaments form a structural framework that helps to define the shape and size of neurons and are essential for normal nerve function.",
        "symptoms": ["seizure", "cirrhosis", "ataxia", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Giant_axonal_neuropathy"
    },
    "Osteochondritis dissecans": {
        "summary": "Osteochondritis dissecans (OCD or OD) is a joint disorder in which cracks form in the articular cartilage and the underlying subchondral bone. OCD usually causes pain and swelling of the affected joint which catches and locks during movement. Physical examination typically reveals an effusion, tenderness, and a crackling sound with joint movement.",
        "symptoms": ["joint pain", "edema", "weakness", "groin pain", "trauma", "abscess", "swelling", "inflammation", "abrasion"],
        "url": "https://en.wikipedia.org/wiki/Osteochondritis_dissecans"
    },
    "Zunich\u2013Kaye syndrome": {
        "summary": "Zunich\u2013Kaye syndrome, also known as Zunich neuroectodermal syndrome, is a rare congenital ichthyosis first described in 1983. It is also referred to as CHIME syndrome, after its main symptoms (colobomas, heart defects, ichthyosiform dermatosis, intellectual disability, and either ear defects or epilepsy). It is a congenital syndrome with only a few cases studied and published.",
        "symptoms": ["edema", "urticaria", "skin lesion", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Zunich%E2%80%93Kaye_syndrome"
    },
    "Kuru (disease)": {
        "summary": "Kuru is a rare, incurable neurodegenerative disorder which was prevalent among the Fore people of Papua New Guinea in the 1950s and 60s. Kuru is caused by the transmission of abnormally folded prion proteins, which leads to symptoms such as tremors, loss of coordination, and neurodegeneration.",
        "symptoms": ["joint pain", "trauma", "insomnia", "loss of coordination", "dysarthria", "tremors", "cuts", "shaking", "headache", "depression", "tremor", "ataxia", "gas", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Kuru_(disease)"
    },
    "Stiff skin syndrome": {
        "summary": "Stiff skin syndrome (also known as \"Congenital fascial dystrophy\") is a cutaneous condition characterized by \u2018rock hard\u2019 induration, thickening of the skin and subcutaneous tissues, limited joint mobility, and mild hypertrichosis in infancy or early childhood. Immunologic abnormalities or vascular hyperactivity are not present in patients.",
        "symptoms": ["hyperactivity"],
        "url": "https://en.wikipedia.org/wiki/Stiff_skin_syndrome"
    },
    "Garre's sclerosing osteomyelitis": {
        "summary": "Garre's sclerosing osteomyelitis is a type of chronic osteomyelitis also called proliferative periostitis, periostitis ossificans and Garr\u00e9's sclerosing osteomyelitis.",
        "symptoms": ["abscess", "inflammation"],
        "url": "https://en.wikipedia.org/wiki/Garre%27s_sclerosing_osteomyelitis"
    },
    "Aquagenic urticaria": {
        "summary": "Aquagenic urticaria, also known as water allergy and water urticaria, is a diagnosed form of physical urticaria. The defining symptom is a painful skin reaction resulting from contact with water. It is sometimes described as an allergy, although it is not a true histamine-releasing allergic reaction like other forms of urticaria. This seems to not be affected by different temperatures of water, such as cold or hot, or chemicals such as fluorine and chlorine, since it is reproduced with distilled water and medical saline. According to Gerald W. Volcheck, \u201cUrticaria represents transient, localized areas of oedema within skin tissue that appear as pruritic, raised erythematous, skin-colored or white, non-pitting, blanching plaques of variable size\u201d. The term urticaria was first used by the Scottish physician William Cullen in 1769. It originates from the Latin word urtica, meaning stinging hair or nettle, as the classical presentation follows the contact with a perennial flowering plant Urtica dioica. The history of urticaria dates back to 1000\u20132000 BC with its reference as a wind-type concealed rash in the book The Yellow Emperor's Inner Classic from Huangdi Neijing. Hippocrates in the 4th century first described urticaria as \"knidosis\" after the Greek word knido for nettle. The discovery of mast cells by Paul Ehrlich in 1879 brought urticaria and similar conditions under a comprehensive idea of allergic conditions.",
        "symptoms": ["confusion", "edema", "painful skin", "rash", "urticaria", "itching"],
        "url": "https://en.wikipedia.org/wiki/Aquagenic_urticaria"
    },
    "Adermatoglyphia": {
        "summary": "Adermatoglyphia is an extremely rare genetic disorder which causes a person to have no fingerprints. There are only four known extended families worldwide which are affected by this condition.",
        "symptoms": ["ataxia"],
        "url": "https://en.wikipedia.org/wiki/Adermatoglyphia"
    },
    "Smith\u2013Fineman\u2013Myers syndrome": {
        "summary": "Smith\u2013Fineman\u2013Myers syndrome (SFMS1), also called X-linked mental retardation-hypotonic facies syndrome 1 (MRXHF1), Carpenter\u2013Waziri syndrome, Chudley\u2013Lowry syndrome, SFMS, Holmes\u2013Gang syndrome and Juberg\u2013Marsidi syndrome (JMS), is a rare X-linked recessive congenital disorder that causes birth defects. This syndrome was named after 3 men, Richard D. Smith, Robert M. Fineman and Gart G. Myers who discovered it around 1980.",
        "symptoms": ["blindness", "drooping eyelid", "hyperactivity", "seizure", "scoliosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Smith%E2%80%93Fineman%E2%80%93Myers_syndrome"
    },
    "Miller\u2013Dieker syndrome": {
        "summary": "Miller\u2013Dieker syndrome (abbreviated MDS), Miller\u2013Dieker lissencephaly syndrome (MDLS), and chromosome 17p13.3 deletion syndrome is a micro deletion syndrome characterized by congenital malformations (a physical defect detectable in an infant at birth which can involve many different parts of the body including the brain, hearts, lungs, liver, bones, or intestinal tract). In this case, it is usually mainly the brain being affected. The congenital malformation can be genetic random and of unknown origin. The malformation is in fact characterized by lissencephaly (smooth brain). MDS is a contiguous gene syndrome, as well, which is a disorder due to the deletion of multiple gene loci that are adjacent to one another. The disorder arises from the deletion of part of the small arm of chromosome 17p (which includes both the LIS1 and 14-3-3 epsilon genes), leading to partial monosomy. There may be unbalanced translocations (i.e. 17q:17p or 12q:17p), or the presence of a ring chromosome 17.",
        "symptoms": ["aching", "seizure", "gas"],
        "url": "https://en.wikipedia.org/wiki/Miller%E2%80%93Dieker_syndrome"
    },
    "MDP syndrome": {
        "summary": "MDP syndrome, also known as mandibular dysplasia with deafness and progeroid features, is an extremely rare metabolic disorder that prevents fatty tissue from being stored underneath the skin. It is only known to affect a very small number of people worldwide (less than 10 cases have been diagnosed as of December 2014). Recent research has suggested that it may be caused by an abnormality of the POLD1 gene on chromosome 19, which causes an enzyme crucial to DNA replication to be defective.",
        "symptoms": ["skin ulcers", "deafness", "joint stiffness", "trauma"],
        "url": "https://en.wikipedia.org/wiki/MDP_syndrome"
    },
    "Simpson\u2013Golabi\u2013Behmel syndrome": {
        "summary": "Simpson\u2013Golabi\u2013Behmel syndrome (SGBS), also called Bulldog syndrome, Sara Agers syndrome, Golabi\u2013Rosen syndrome, Simpson dysmorphia syndrome (SDYS) or X-linked dysplasia gigantism syndrome (DGSX), is a rare inherited congenital disorder that can cause craniofacial, skeletal, cardiac, and renal abnormalities. The syndrome is inherited in an X-linked recessive fashion, where males express the phenotype and females usually do not. Females that possess one copy of the mutation are considered to be carriers of the syndrome and may express varying degrees of the phenotype.",
        "symptoms": ["edema", "seizure", "obesity", "blindness", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Simpson%E2%80%93Golabi%E2%80%93Behmel_syndrome"
    },
    "Angelman syndrome": {
        "summary": "Angelman syndrome (AS) is a neurodevelopmental disorder characterized by severe intellectual and developmental disability, sleep disturbance, seizures, jerky movements (especially hand-flapping), frequent laughter or smiling, and usually a happy demeanor.",
        "symptoms": ["edema", "hyperactivity", "seizure", "tremors", "scoliosis", "obesity", "drooling", "tremor", "ataxia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Angelman_syndrome"
    },
    "Acanthamoeba keratitis": {
        "summary": "Acanthamoeba keratitis is a rare disease in which amoebae invade the cornea of the eye. It may result in permanent visual impairment or blindness.",
        "symptoms": ["red eye", "diplopia", "edema", "phobia", "blindness", "abscess", "inflammation", "rash", "nystagmus", "exophthalmos", "ptosis"],
        "url": "https://en.wikipedia.org/wiki/Acanthamoeba_keratitis"
    },
    "Immunodeficiency\u2013centromeric instability\u2013facial anomalies syndrome": {
        "summary": "ICF syndrome (or Immunodeficiency, Centromere instability and Facial anomalies syndrome) is a very rare autosomal recessive immune disorder.",
        "symptoms": ["ataxia", "gas", "edema"],
        "url": "https://en.wikipedia.org/wiki/Immunodeficiency%E2%80%93centromeric_instability%E2%80%93facial_anomalies_syndrome"
    },
    "Barakat syndrome": {
        "summary": "Barakat syndrome, is a rare disease characterized by hypoparathyroidism, sensorineural deafness and renal disease, and hence also known as HDR syndrome. It was first described by Amin J. Barakat et al. in 1977.",
        "symptoms": ["edema", "deafness", "deformity", "hearing loss", "rash", "convulsions"],
        "url": "https://en.wikipedia.org/wiki/Barakat_syndrome"
    },
    "Canavan disease": {
        "summary": "Canavan disease, also called Canavan\u2013van Bogaert\u2013Bertrand disease, is an autosomal recessive degenerative disorder that causes progressive damage to nerve cells in the brain, and is one of the most common degenerative cerebral diseases of infancy. It is caused by a deficiency of the enzyme aminoacylase 2, and is one of a group of genetic diseases referred to as a leukodystrophies. It is characterized by degeneration of myelin in the phospholipid layer insulating the axon of a neuron and is associated with a gene located on human chromosome 17.",
        "symptoms": ["akathisia", "edema", "blindness", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Canavan_disease"
    },
    "Variably protease-sensitive prionopathy": {
        "summary": "Variably protease-sensitive prionopathy (VPSPr) (formerly known as Protease Sensitive Prionopathy) is a sporadic prion protein disease identified in 2008 and first described in 2010 by Zou W.Q. and coworkers from the United States National Prion Disease Pathology Surveillance Center.",
        "symptoms": ["aphasia", "ataxia", "dysarthria", "insomnia"],
        "url": "https://en.wikipedia.org/wiki/Variably_protease-sensitive_prionopathy"
    },
    "Congenital bilateral perisylvian syndrome": {
        "summary": "Congenital bilateral perisylvian syndrome (CBPS) is a rare neurological disease characterized by paralysis of certain facial muscles and epileptic seizures.",
        "symptoms": ["muscle spasm", "seizure", "paralysis", "dysarthria", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Congenital_bilateral_perisylvian_syndrome"
    },
    "Lethal congenital contracture syndrome": {
        "summary": "Lethal congenital contracture syndrome 1 (LCCS1), also called Multiple contracture syndrome, Finnish type, is an autosomal recessive genetic disorder characterized by total immobility of a fetus, detectable at around the 13th week of pregnancy. LCCS1 invariably leads to prenatal death before the 32nd gestational week. LCCS1 is one of 40 Finnish heritage diseases. It was first described in 1985 and since then, approximately 70 cases have been diagnosed.",
        "symptoms": ["edema", "akinesia"],
        "url": "https://en.wikipedia.org/wiki/Lethal_congenital_contracture_syndrome"
    },
    "Hidradenitis suppurativa": {
        "summary": "Hidradenitis suppurativa (HS), also known as acne inversa, is a chronic skin disease characterized by clusters of abscesses or subcutaneous boil-like \"infections\" (often free of actual bacteria) that most commonly affects the underarms, under the breasts, inner thighs, groin, and buttocks. Outbreaks are painful and may persist for years with interspersed periods of inflammation, often culminating in sudden drainage of pus. This process often forms open wounds that do not heal and frequently leads to significant scarring.",
        "symptoms": ["boil", "edema", "hair loss", "mania", "trauma", "abscess", "deformity", "inflammation", "irritation", "obesity", "depression", "ptosis", "hirsutism", "sweating", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Hidradenitis_suppurativa"
    },
    "PAPA syndrome": {
        "summary": "PAPA syndrome is an acronym for pyogenic arthritis, pyoderma gangrenosum and acne. It is a rare genetic disorder characterised by its effects on skin and joints.",
        "symptoms": ["fever", "urticaria", "trauma"],
        "url": "https://en.wikipedia.org/wiki/PAPA_syndrome"
    },
    "Woodhouse\u2013Sakati syndrome": {
        "summary": "Woodhouse\u2013Sakati syndrome, also called hypogonadism, alopecia, diabetes mellitus, intellectual disability and extrapyramidal syndrome, is a rare autosomal recessive multisystem disorder which causes malformations throughout the body, and deficiencies affecting the endocrine system.",
        "symptoms": ["edema", "deafness", "hearing loss", "myopathy", "gas", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Woodhouse%E2%80%93Sakati_syndrome"
    },
    "Facial Onset Sensory Motor Neuropathy syndrome": {
        "summary": "Facial Onset Sensory and Motor Neuropathy syndrome (FOSMN) is an extremely rare disease characterised by sensory and motor loss beginning in the face and spreading to involve an increasingly larger area including the upper arms. Details of the disease, and in particular its aetiology, are currently subject to debate, mainly because FOSMN syndrome is so rare. FOSMN was first described in four patients in 2006  and subsequently in a further six patients  but so far, these ten represent the only reported cases.",
        "symptoms": ["weakness"],
        "url": "https://en.wikipedia.org/wiki/Facial_Onset_Sensory_Motor_Neuropathy_syndrome"
    },
    "Impossible syndrome": {
        "summary": "Impossible Syndrome, or Chondrodysplasia situs inversus imperforate anus polydactyly, is a complex combination of human congenital malformations (birth defects).",
        "symptoms": ["edema", "gas"],
        "url": "https://en.wikipedia.org/wiki/Impossible_syndrome"
    },
    "Niemann\u2013Pick disease": {
        "summary": "9016 34341",
        "symptoms": ["seizure", "dysarthria", "abdominal distension", "cataplexy", "ataxia", "bleeding", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Niemann%E2%80%93Pick_disease"
    },
    "Adiposis dolorosa": {
        "summary": "Adiposis dolorosa, also known as Dercum's disease or Anders disease, is a rare condition characterized by generalized obesity and fatty tumors in the adipose tissue. The tumors are normally painful and found in multiples on the extremities. The cause and mechanism of Dercum's disease remains unknown. Possible causes include nervous system dysfunction, mechanical pressure on nerves, adipose tissue dysfunction, and trauma.",
        "symptoms": ["overweight", "confusion", "chronic pain", "edema", "weakness", "trauma", "anxiety", "inflammation", "constipation", "muscle aches", "obesity", "shortness of breath", "depression", "bloating", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Adiposis_dolorosa"
    },
    "Hypertryptophanemia": {
        "summary": "Hypertryptophanemia, also called familial hypertryptophanemia, is a rare autosomal recessive metabolic disorder that results in a massive buildup of the amino acid tryptophan in the blood, with associated symptoms and tryptophanuria (-uria denotes \"in the urine\").",
        "symptoms": ["joint pain", "aggressive behavior"],
        "url": "https://en.wikipedia.org/wiki/Hypertryptophanemia"
    },
    "Crouzon syndrome": {
        "summary": "Crouzon syndrome is an autosomal dominant genetic disorder known as a branchial arch syndrome. Specifically, this syndrome affects the first branchial (or pharyngeal) arch, which is the precursor of the maxilla and mandible. Since the branchial arches are important developmental features in a growing embryo, disturbances in their development create lasting and widespread effects.",
        "symptoms": ["blindness", "deformity", "asthenia", "scoliosis", "hearing loss", "exophthalmos", "gas"],
        "url": "https://en.wikipedia.org/wiki/Crouzon_syndrome"
    },
    "Urocanic aciduria": {
        "summary": "Urocanic aciduria, also called urocanate hydratase deficiency or urocanase deficiency, is an autosomal recessive metabolic disorder caused by a deficiency of the enzyme urocanase. It is a secondary disorder of histidine metabolism.",
        "symptoms": ["aggressive behavior"],
        "url": "https://en.wikipedia.org/wiki/Urocanic_aciduria"
    },
    "Gaucher's disease": {
        "summary": "Gaucher's disease or Gaucher disease (/\u0261o\u028a\u02c8\u0283e\u026a/) (GD) is a genetic disorder in which glucocerebroside (a sphingolipid, also known as glucosylceramide) accumulates in cells and certain organs. The disorder is characterized by bruising, fatigue, anemia, low blood platelet count and enlargement of the liver and spleen, and is caused by a hereditary deficiency of the enzyme glucocerebrosidase (also known as glucosylceramidase), which acts on glucocerebroside. When the enzyme is defective, glucocerebroside accumulates, particularly in white blood cells and especially in macrophages (mononuclear leukocytes). Glucocerebroside can collect in the spleen, liver, kidneys, lungs, brain, and bone marrow.",
        "symptoms": ["apnea", "weakness", "deformity", "bleeding", "seizure", "cirrhosis", "swelling", "inflammation", "convulsions", "twitch", "apraxia", "ptosis", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Gaucher%27s_disease"
    },
    "Trigeminal neuralgia": {
        "summary": "Trigeminal neuralgia (TN or TGN) is a chronic pain disorder that affects the trigeminal nerve. There are two main types: typical and atypical trigeminal neuralgia. The typical form results in episodes of severe, sudden, shock like pain in one side of the face that lasts for seconds to a few minutes. Groups of these episodes can occur over a few hours. The atypical form results in a constant burning pain that is less severe. Episodes may be triggered by any touch to the face. Both forms may occur in the same person. It is one of the most painful conditions and can result in depression.",
        "symptoms": ["nerve pain", "chronic pain", "tingling", "trauma", "deformity", "anxiety", "paralysis", "numbness", "headache", "depression", "gas"],
        "url": "https://en.wikipedia.org/wiki/Trigeminal_neuralgia"
    },
    "Triosephosphate isomerase deficiency": {
        "summary": "Triosephosphate isomerase deficiency is a rare autosomal recessive metabolic disorder which was initially described in 1965.",
        "symptoms": ["myopathy"],
        "url": "https://en.wikipedia.org/wiki/Triosephosphate_isomerase_deficiency"
    },
    "Lipsch\u00fctz ulcer": {
        "summary": "Lipsch\u00fctz ulcer, ulcus vulvae acutum or reactive non-sexually related acute genital ulcers (English: acute ulceration of the vulva) is a rare disease characterized by painful genital ulcers, fever, and lymphadenopathy, occurring most commonly, but not exclusively, in adolescents and young women. Previously, it was described as being more common in virgins. It is not a sexually transmitted disease, and is often misdiagnosed, sometimes as a symptom of Beh\u00e7et's disease.",
        "symptoms": ["dyspareunia", "vaginal bleeding", "fever", "malaise", "vaginal discharge", "infertility", "bleeding"],
        "url": "https://en.wikipedia.org/wiki/Lipsch%C3%BCtz_ulcer"
    },
    "Goldenhar syndrome": {
        "summary": "Goldenhar syndrome (also known as Oculo-Auriculo-Vertebral (OAV) syndrome) is a rare congenital defect characterized by incomplete development of the ear, nose, soft palate, lip, and mandible. It is associated with anomalous development of the first branchial arch and second branchial arch. Common clinical manifestations include limbal dermoids, preauricular skin tags, and strabismus.",
        "symptoms": ["edema", "blindness", "trauma", "deafness", "scoliosis", "hearing loss", "gas"],
        "url": "https://en.wikipedia.org/wiki/Goldenhar_syndrome"
    },
    "Biliary atresia": {
        "summary": "Biliary atresia, also known as extrahepatic ductopenia and progressive obliterative cholangiopathy, is a childhood disease of the liver in which one or more bile ducts are abnormally narrow, blocked, or absent. It can be congenital or acquired. As a birth defect in newborn infants, it has an incidence of one in 10,000\u201315,000 live births in the United States, and a prevalence of one in 16,700 in the British Isles. Biliary atresia is most common in East Asia, with a frequency of one in 5,000.",
        "symptoms": ["bleeding", "jaundice", "swollen abdomen", "cirrhosis", "inflammation", "itchiness", "poor absorption of nutrients", "yellowing of the skin", "liver failure", "dark urine", "pale stools", "gas"],
        "url": "https://en.wikipedia.org/wiki/Biliary_atresia"
    },
    "Musical hallucinations": {
        "summary": "Musical hallucinations fall under the category of auditory hallucinations and describe a disorder in which a sound is perceived as instrumental music, sounds, or songs. It is a very rare disorder, reporting only 0.16% in a cohort study of 3,678 individuals.",
        "symptoms": ["hallucination", "deafness", "hearing loss", "arrhythmia", "tinnitus", "depression", "amusia"],
        "url": "https://en.wikipedia.org/wiki/Musical_hallucinations"
    },
    "Prune belly syndrome": {
        "summary": "Prune belly syndrome, also referred to as abdominal muscle deficiency syndrome, congenital absence of the abdominal muscles, Eagle-Barrett syndrome, Obrinsky syndrome, Fr\u00f6hlich syndrome, or, rarely, triad syndrome, is a rare, genetic birth defect affecting about 1 in 40,000 births. About 97% of those affected are male. Prune belly syndrome is a congenital disorder of the urinary system, characterized by a triad of symptoms. The syndrome is named for the mass of wrinkled skin that is often (but not always) present on the abdomen of those with the disorder.",
        "symptoms": ["scoliosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Prune_belly_syndrome"
    },
    "Gitelman syndrome": {
        "summary": "Gitelman syndrome is an autosomal recessive kidney disorder characterized by hypokalemic metabolic alkalosis with hypocalciuria, and hypomagnesemia. It is caused by loss of function mutations of the thiazide-sensitive sodium-chloride symporter (also known as NCC, NCCT, or TSC) located in the distal convoluted tubule.",
        "symptoms": ["weakness", "numbness", "arrhythmia", "urinary incontinence", "irritability", "incontinence", "ataxia", "ptosis", "fatigue", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Gitelman_syndrome"
    },
    "Gorham's disease": {
        "summary": "Gorham's disease (pronounced GOR-amz), also known as Gorham vanishing bone disease and phantom bone disease, is a very rare skeletal condition of unknown cause, characterized by the uncontrolled proliferation of distended, thin-walled vascular or lymphatic channels within bone, which leads to resorption and replacement of bone with angiomas and/or fibrosis. Current treatments are experimental only.",
        "symptoms": ["poor growth", "weakness", "trauma", "deformity", "difficulty breathing", "swelling", "breathing problems", "chest pain", "bone deformity", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Gorham%27s_disease"
    },
    "Athetoid cerebral palsy": {
        "summary": "Athetoid cerebral palsy or dyskinetic cerebral palsy (sometimes abbreviated ADCP) is a type of cerebral palsy primarily associated with damage, like other forms of CP, to the basal ganglia in the form of lesions that occur during brain development due to bilirubin encephalopathy and hypoxic-ischemic brain injury. Unlike spastic or ataxic cerebral palsies, ADCP is characterized by both hypertonia and hypotonia, due to the affected individual's inability to control muscle tone. Clinical diagnosis of ADCP typically occurs within 18 months of birth and is primarily based upon motor function and neuroimaging techniques. While there are no cures for ADCP, some drug therapies as well as speech, occupational therapy, and physical therapy have shown capacity for treating the symptoms.",
        "symptoms": ["aching", "speech problem", "deafness", "dysarthria", "hearing loss", "muscle spasm", "ataxia", "drooling"],
        "url": "https://en.wikipedia.org/wiki/Athetoid_cerebral_palsy"
    },
    "Cornelia de Lange Syndrome": {
        "summary": "Cornelia de Lange Syndrome (CdLS) is a very rare genetic disorder present from birth, but not always diagnosed at birth. It causes a range of physical, cognitive, and medical challenges and affects both sexes equally. The syndrome is named after Dutch pediatrician Cornelia Catharina de Lange, who described it.",
        "symptoms": ["edema", "seizure", "aggression", "change in behavior", "constipation", "vomiting", "poor appetite", "nystagmus", "ataxia", "ptosis", "hirsutism", "gas"],
        "url": "https://en.wikipedia.org/wiki/Cornelia_de_Lange_Syndrome"
    },
    "Necrolytic migratory erythema": {
        "summary": "Necrolytic migratory erythema (NME) is a red, blistering rash that spreads across the skin. It particularly affects the skin around the mouth and distal extremities; but may also be found on the lower abdomen, buttocks, perineum, and groin. It is strongly associated with glucagonoma, a glucagon-producing tumor of the pancreas, but is also seen in a number of other conditions including liver disease and intestinal malabsorption.",
        "symptoms": ["edema", "trauma", "skin lesion", "rash", "urticaria", "cirrhosis", "pustule", "blister"],
        "url": "https://en.wikipedia.org/wiki/Necrolytic_migratory_erythema"
    },
    "Extramammary Paget's disease": {
        "summary": "Extramammary Paget\u2019s disease (EMPD), also extramammary Paget disease, is a rare, slow-growing, usually noninvasive intraepithelial (in the skin) adenocarcinoma outside the mammary gland and includes Paget's disease of the vulva and the extremely rare Paget's disease of the penis.",
        "symptoms": ["itching", "bleeding", "skin lesion", "gas"],
        "url": "https://en.wikipedia.org/wiki/Extramammary_Paget%27s_disease"
    },
    "Hay\u2013Wells syndrome": {
        "summary": "Hay\u2013Wells syndrome (also known as AEC syndrome; see Naming) is one of at least 150 known types of ectodermal dysplasia.",
        "symptoms": ["rash", "ptosis", "urticaria", "gas", "edema"],
        "url": "https://en.wikipedia.org/wiki/Hay%E2%80%93Wells_syndrome"
    },
    "Camurati\u2013Engelmann disease": {
        "summary": "Camurati\u2013Engelmann disease (CED) is a very rare autosomal dominant genetic disorder that causes characteristic anomalies in the skeleton. It is a form of dysplasia. Patients typically have heavily thickened bones, especially along the shafts of the long bones (called diaphyseal dysplasia). The skull bones may be thickened so that the passages through the skull that carry nerves and blood vessels become narrowed, possibly leading to sensory deficits, blindness, or deafness.",
        "symptoms": ["difficulty gaining weight", "aching", "fatigue", "blindness", "weakness", "deafness", "stabbing pain", "scoliosis", "muscle spasm", "headache", "muscle weakness", "loss of vision", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Camurati%E2%80%93Engelmann_disease"
    },
    "ALOX12B": {
        "summary": "242",
        "symptoms": ["scaly skin", "chronic pain", "inflammation", "rash"],
        "url": "https://en.wikipedia.org/wiki/ALOX12B"
    },
    "Hartnup disease": {
        "summary": "Hartnup disease (also known as \"pellagra-like dermatosis\" and \"Hartnup disorder\") is an autosomal recessive metabolic disorder affecting the absorption of nonpolar amino acids (particularly tryptophan that can be, in turn, converted into serotonin, melatonin, and niacin). Niacin is a precursor to nicotinamide, a necessary component of NAD+.:541",
        "symptoms": ["hallucination", "anxiety", "rash", "fever", "psychiatric problem", "nystagmus", "headache", "delusion", "tremor", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Hartnup_disease"
    },
    "Isolated 17,20-lyase deficiency": {
        "summary": "Isolated 17,20-lyase deficiency (ILD), also called isolated 17,20-desmolase deficiency, is a rare endocrine and autosomal recessive genetic disorder which is characterized by a complete or partial loss of 17,20-lyase activity and, in turn, impaired production of the androgen and estrogen sex steroids. The condition manifests itself as pseudohermaphroditism (partially or fully underdeveloped genitalia) in males, in whom it is considered to be a form of intersex, and, in both sexes, as a reduced or absent puberty/lack of development of secondary sexual characteristics, resulting in a somewhat childlike appearance in adulthood (if left untreated).",
        "symptoms": ["edema", "sterility", "gas", "irregular menses", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Isolated_17,20-lyase_deficiency"
    },
    "Stevens\u2013Johnson syndrome": {
        "summary": "Stevens\u2013Johnson syndrome, a form of toxic epidermal necrolysis, is a life-threatening skin condition, in which cell death causes the epidermis to separate from the dermis. The syndrome is thought to be a hypersensitivity complex that affects the skin and the mucous membranes. The best known causes are certain medications (such as lamotrigine), but it can also be due to infections, or more rarely, cancers.",
        "symptoms": ["edema", "blindness", "sore throat", "inflammation", "rash", "fever", "urticaria", "impaired vision", "ptosis", "fatigue", "gas", "blister"],
        "url": "https://en.wikipedia.org/wiki/Stevens%E2%80%93Johnson_syndrome"
    },
    "Pulmonary alveolar proteinosis": {
        "summary": "Pulmonary alveolar proteinosis (abbreviated PAP), is a rare lung disease in which abnormal accumulation of pulmonary surfactant occurs within the alveoli, interfering with gas exchange. PAP can occur in a primary form or secondarily in the settings of malignancy (especially in myeloid leukemia), pulmonary infection, or environmental exposure to dusts or chemicals. Rare familial forms have also been recognized, suggesting a genetic component in some cases.",
        "symptoms": ["edema", "dyspnea", "abscess", "fever", "shortness of breath", "cough", "gas", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Pulmonary_alveolar_proteinosis"
    },
    "Dermatopathia pigmentosa reticularis": {
        "summary": "Dermatopathia pigmentosa reticularis (DPR), also known as dermatopathia pigmentosa reticularis hyperkeratotica et mutilans, dermatopathia pigmentosa reticularis hypohidotica et atrophica and dermatopathic pigmentosa reticularis,:511 is a rare, autosomal dominant congenital disorder that is a form of ectodermal dysplasia. Dermatopathia pigmentosa reticularis is composed of the triad of generalized reticulate hyperpigmentation, noncicatricial alopecia, and onychodystrophy.:856",
        "symptoms": ["edema", "thin hair", "brittle nails", "urticaria", "myopathy", "hyperpigmentation", "mottled skin", "gas", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Dermatopathia_pigmentosa_reticularis"
    },
    "Cerebral salt-wasting syndrome": {
        "summary": "Cerebral salt-wasting syndrome (CSWS) is a rare endocrine condition featuring a low blood sodium concentration and dehydration in response to trauma/injury or the presence of tumors in or surrounding the brain. This form of low blood sodium is due to excessive sodium excretion from the normally functioning kidney due to a disorder of the cerebrum of the brain. The condition was initially described in 1950. Half a century later aetiology and management of CSWS remains controversial. One problem is that there is no diagnostic test for CSWS.",
        "symptoms": ["edema", "nausea", "seizure", "anxiety", "low blood pressure", "malaise", "lightheaded", "vertigo", "acid reflux", "numbness", "dizziness", "headache", "chest pain", "loss of consciousness", "gas", "myopathy", "dehydration", "facial flushing", "visual disturbances", "hypotension", "muscle cramps", "nerve pain", "excessive thirst", "trauma", "constipation"],
        "url": "https://en.wikipedia.org/wiki/Cerebral_salt-wasting_syndrome"
    },
    "Urticaria pigmentosa": {
        "summary": "Urticaria pigmentosa (also known as \"Generalized eruption of cutaneous mastocytosis (childhood type)\":616 ) is the most common form of cutaneous mastocytosis. It is a rare disease caused by excessive numbers of mast cells in the skin that produce hives or lesions on the skin when irritated.",
        "symptoms": ["edema", "nausea", "high blood pressure", "irritation", "tachycardia", "vomiting", "urticaria", "headache", "itching", "gas"],
        "url": "https://en.wikipedia.org/wiki/Urticaria_pigmentosa"
    },
    "Patterson syndrome": {
        "summary": "Patterson syndrome, also called pseudoleprechaunism, is an extremely rare syndrome, first mistaken as Donohue Syndrome (also known as Leprechaunism).",
        "symptoms": ["hyperpigmentation"],
        "url": "https://en.wikipedia.org/wiki/Patterson_syndrome"
    },
    "Behr syndrome": {
        "summary": "Behr syndrome is characterized by the association of early-onset optic atrophy with spinocerebellar degeneration resulting in ataxia, pyramidal signs, peripheral neuropathy and developmental delay.",
        "symptoms": ["tremor", "ataxia", "nystagmus"],
        "url": "https://en.wikipedia.org/wiki/Behr_syndrome"
    },
    "Carpenter syndrome": {
        "summary": "Carpenter syndrome, also called acrocephalopolysyndactyly type II, is an extremely rare autosomal recessive congenital disorder characterized by craniofacial malformations, obesity, and syndactyly.",
        "symptoms": ["edema", "dental problem", "inflammation", "obesity", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Carpenter_syndrome"
    },
    "Dent's disease": {
        "summary": "Dent's disease (or Dent disease) is a rare X-linked recessive inherited condition that affects the proximal renal tubules of the kidney. It is one cause of Fanconi syndrome, and is characterized by tubular proteinuria, excess calcium in the urine, formation of calcium kidney stones, nephrocalcinosis, and chronic kidney failure.",
        "symptoms": ["blindness", "deafness", "seizure", "dehydration", "hyperthermia", "ataxia", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Dent%27s_disease"
    },
    "Lemierre's syndrome": {
        "summary": "Lemierre's syndrome (or Lemierre's disease, also known as postanginal shock including sepsis and human necrobacillosis) refers to thrombophlebitis of the internal jugular vein. It most often develops as a complication of a bacterial sore throat infection in young, otherwise healthy adults. The thrombophlebitis is a serious condition and may lead to further systemic complications such as bacteria in the blood or septic emboli.",
        "symptoms": ["rigors", "weakness", "jaundice", "abscess", "sore throat", "nausea", "lethargy", "inflammation", "low blood pressure", "fever", "vomiting", "shortness of breath", "abdominal pain", "chest pain", "memory loss", "headache", "neck stiffness", "cough", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Lemierre%27s_syndrome"
    },
    "PEHO syndrome": {
        "summary": "PEHO syndrome is a progressive encephalopathy with edema, hypsarrhythmia and optic atrophy. It is a very rare disease, one of the Finnish heritage diseases, and has been reported also in Dutch and Swiss infants.",
        "symptoms": ["arrhythmia", "edema"],
        "url": "https://en.wikipedia.org/wiki/PEHO_syndrome"
    },
    "Situs inversus": {
        "summary": "Situs inversus (also called situs transversus or oppositus) is a congenital condition in which the major visceral organs are reversed or mirrored from their normal positions. The normal arrangement of internal organs is known as situs solitus while situs inversus is generally the mirror image of situs solitus. Although cardiac problems are more common than in the general population, most people with situs inversus have no medical symptoms or complications resulting from the condition, and until the advent of modern medicine it was usually undiagnosed.",
        "symptoms": ["aching", "confusion", "abdominal pain", "infertility"],
        "url": "https://en.wikipedia.org/wiki/Situs_inversus"
    },
    "May\u2013Hegglin anomaly": {
        "summary": "May\u2013Hegglin anomaly (MHA), also known as Dohle leukocyte inclusions with giant platelets and macrothrombocytopenia with leukocyte inclusions, is a rare genetic disorder of the blood platelets that causes them to be abnormally large.",
        "symptoms": ["deafness", "asthenia", "hearing loss", "ataxia", "cirrhosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/May%E2%80%93Hegglin_anomaly"
    },
    "Waldmann disease": {
        "summary": "Waldmann disease, also known as Waldmann's disease and Primary intestinal lymphangiectasia, is a rare disease characterized by enlargement of the lymph vessels supplying the lamina propria of the small intestine.",
        "symptoms": ["nausea", "swelling", "edema"],
        "url": "https://en.wikipedia.org/wiki/Waldmann_disease"
    },
    "Yunis\u2013Varon syndrome": {
        "summary": "Yunis\u2013Varon syndrome (YVS), also called cleidocranial dysplasia with micrognathia, absent thumbs and distal aphalangia, is an extremely rare autosomal recessive multisystem congenital disorder which affects the skeletal system, ectodermal tissue, heart and respiratory system.",
        "symptoms": ["edema", "gas"],
        "url": "https://en.wikipedia.org/wiki/Yunis%E2%80%93Varon_syndrome"
    },
    "Aldolase A deficiency": {
        "summary": "Aldolase A deficiency, also called ALDOA deficiency or red cell aldolase deficiency, is an autosomal recessive metabolic disorder resulting in a deficiency of the enzyme aldolase A, which is found predominantly in red blood cells and muscle tissue. It may lead to hemolytic anaemia as well as myopathy associated with exercise intolerance and rhabdomyolysis in some cases.",
        "symptoms": ["mania", "weakness", "jaundice", "fever", "muscle weakness", "frequent infection", "fatigue", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Aldolase_A_deficiency"
    },
    "Parastremmatic dwarfism": {
        "summary": "Parastremmatic dwarfism is a rare bone disease that features severe dwarfism, thoracic kyphosis (a type of scoliosis that affects the upper back), a distortion and twisting of the limbs, contractures of the large joints, malformations of the vertebrae and pelvis, and incontinence. The disease was first reported in 1970 by Leonard Langer and associates; they used the term parastremmatic from the Greek parastremma, or distorted limbs, to describe it. On X-rays, the disease is distinguished by a \"flocky\" or lace-like appearance to the bones. The disease is congenital, which means it is apparent at birth. It is caused by a mutation in the TRPV4 gene, located on chromosome 12 in humans. The disease is inherited in an autosomal dominant manner.",
        "symptoms": ["scoliosis", "incontinence"],
        "url": "https://en.wikipedia.org/wiki/Parastremmatic_dwarfism"
    },
    "Atransferrinemia": {
        "summary": "Atransferrinemia, also called familial hypotransferrinemia, is an autosomal recessive metabolic disorder in which there is an absence of transferrin, a plasma protein that transports iron through the blood. Atransferrinemia is characterized by anemia and hemosiderosis in the heart and liver. The iron damage to the heart can lead to heart failure. The anemia is typically microcytic and hypochromic (the red blood cells are abnormally small and pale). Atransferrinemia was first described in 1961 and is extremely rare, with only ten documented cases worldwide.",
        "symptoms": ["trauma", "infertility", "gas"],
        "url": "https://en.wikipedia.org/wiki/Atransferrinemia"
    },
    "Ramos-Arroyo syndrome": {
        "summary": "Ramos-Arroyo syndrome is marked by corneal anesthesia, absence of the peripapillary choriocapillaris and retinal pigment epithelium, bilateral sensorineural hearing loss, unusual facial appearance, persistent ductus arteriosus, Hirschsprung disease, and moderate intellectual disability. It appears to be a distinct autosomal dominant syndrome with variable expressivity.",
        "symptoms": ["deafness", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Ramos-Arroyo_syndrome"
    },
    "Thrombotic thrombocytopenic purpura": {
        "summary": "Thrombotic thrombocytopenic purpura (TTP or Moschcowitz syndrome:822) is a rare disorder of the blood-coagulation system, causing extensive microscopic clots to form in the small blood vessels throughout the body. These small blood clots, called thrombi, can damage many organs including the kidneys, heart and brain. In the era before effective treatment with plasma exchange, the fatality rate was about 90%. With plasma exchange, this has dropped to 10% at six months. Immunosuppressants, such as glucocorticoids, rituximab, cyclophosphamide, vincristine, or ciclosporin, may also be used if a relapse or recurrence follows plasma exchange.",
        "symptoms": ["nausea", "seizure", "fever", "malaise", "abdominal pain", "boil", "hallucination", "jaundice", "insect bite", "numbness", "headache", "hyperpigmentation", "gas", "confusion", "abscess", "asthenia", "depressed", "vomiting", "urticaria", "bleeding", "paralysis", "alopecia", "mania", "high blood pressure", "rash", "convulsions", "blister"],
        "url": "https://en.wikipedia.org/wiki/Thrombotic_thrombocytopenic_purpura"
    },
    "GM1 gangliosidoses": {
        "summary": "The GM1 gangliosidoses (or GM1 gangliosidosis) are caused by a deficiency of beta-galactosidase, with resulting abnormal storage of acidic lipid materials in cells of the central and peripheral nervous systems, but particularly in the nerve cells.",
        "symptoms": ["edema", "muscle weakness", "weakness", "joint stiffness", "seizure", "lethargy", "scoliosis", "nystagmus", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/GM1_gangliosidoses"
    },
    "Klippel\u2013Tr\u00e9naunay syndrome": {
        "summary": "Klippel\u2013Tr\u00e9naunay syndrome (KTS or KT), formerly Klippel\u2013Tr\u00e9naunay\u2013Weber syndrome and sometimes angioosteohypertrophy syndrome and hemangiectatic hypertrophy, is a rare congenital medical condition in which blood vessels and/or lymph vessels fail to form properly. The three main features are nevus flammeus (port-wine stain), venous and lymphatic malformations, and soft-tissue hypertrophy of the affected limb. It is similar to, though distinctly separate from, the less common Parkes-Weber syndrome.",
        "symptoms": ["edema", "deformity", "swelling", "inflammation", "numbness", "hyperpigmentation", "bone deformity", "bleeding", "gas"],
        "url": "https://en.wikipedia.org/wiki/Klippel%E2%80%93Tr%C3%A9naunay_syndrome"
    },
    "Surfer's myelopathy": {
        "summary": "Surfer's myelopathy is a rare nontraumatic paraparesis. It is a spinal cord injury caused by hyperextension of the back. When the back is hyperextended, a blood vessel leading to the spine can become kinked, depriving the spinal cord of oxygen",
        "symptoms": ["infertility", "trauma", "paralysis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Surfer%27s_myelopathy"
    },
    "Vaginal hypoplasia": {
        "summary": "Vaginal hypoplasia is the underdevelopment or incomplete development of the vagina. It is a birth defect or congenital abnormality of the female genitourinary system.",
        "symptoms": ["gas"],
        "url": "https://en.wikipedia.org/wiki/Vaginal_hypoplasia"
    },
    "Spondyloperipheral dysplasia": {
        "summary": "Spondyloperipheral dysplasia is an autosomal dominant disorder of bone growth. The condition is characterized by flattened bones of the spine (platyspondyly) and unusually short fingers and toes (brachydactyly). Some affected individuals also have other skeletal abnormalities, short stature, nearsightedness (myopia), hearing loss, and mental retardation. Spondyloperipheral dysplasia is a subtype of collagenopathy, types II and XI.",
        "symptoms": ["myopathy", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Spondyloperipheral_dysplasia"
    },
    "Familial male-limited precocious puberty": {
        "summary": "Familial male-limited precocious puberty, often abbreviated as FMPP, also known as familial sexual precocity or gonadotropin-independent testotoxicosis, is a form of gonadotropin-independent precocious puberty in which boys experience early onset and progression of puberty. Signs of puberty can develop as early as an age of 1 year.",
        "symptoms": ["asthenia", "edema", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Familial_male-limited_precocious_puberty"
    },
    "Syrinx (medicine)": {
        "summary": "A syrinx is a rare, fluid-filled neuroglial cavity within the spinal cord (syringomyelia), in the brain stem (syringobulbia), or in the nerves of the elbow, usually in a young age.",
        "symptoms": ["vertigo", "weakness", "trauma", "dysarthria", "headache", "nystagmus", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Syrinx_(medicine)"
    },
    "Acrocallosal syndrome": {
        "summary": "Acrocallosal syndrome (also known as ACLS) is a rare autosomal recessive syndrome characterized by corpus callosum agenesis, polydactyly, multiple dysmorphic features, motor and mental retardation, and other symptoms. The syndrome was first described by Albert Schinzel in 1979.",
        "symptoms": ["rash", "edema"],
        "url": "https://en.wikipedia.org/wiki/Acrocallosal_syndrome"
    },
    "Corneal-cerebellar syndrome": {
        "summary": "Corneal-cerebellar syndrome (also known as Der Kaloustian-Jarudi-Khoury syndrome) is an autosomally resessive disease that was first described in 1985. Three cases are known: all are sisters in the same family.",
        "symptoms": ["ataxia", "edema"],
        "url": "https://en.wikipedia.org/wiki/Corneal-cerebellar_syndrome"
    },
    "Primary lateral sclerosis": {
        "summary": "Primary lateral sclerosis (PLS) is a rare neuromuscular disease characterized by progressive muscle weakness in the voluntary muscles. PLS belongs to a group of disorders known as motor neuron diseases. Motor neuron diseases develop when the nerve cells that control voluntary muscle movement degenerate and die, causing weakness in the muscles they control.",
        "symptoms": ["akathisia", "edema", "muscle weakness", "weakness", "insomnia", "abscess", "aphasia", "seizure", "swallowing problem", "inflammation", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea"],
        "url": "https://en.wikipedia.org/wiki/Primary_lateral_sclerosis"
    },
    "Xeroderma pigmentosum": {
        "summary": "Xeroderma pigmentosum (XP) is a rare autosomal recessive genetic disorder of DNA repair in which the ability to repair damage caused by ultraviolet (UV) light is deficient.:574 In extreme cases, all exposure to sunlight must be forbidden, no matter how small; as such, individuals with the disease are often colloquially referred to as \"Moon child\". Multiple basal cell carcinomas (basaliomas) and other skin malignancies frequently occur at a young age in those with XP; metastatic malignant melanoma and squamous cell carcinoma are the two most common causes of death in XP victims. This disease is present in both genders and in all races, with an incidence of 1:250,000 in the United States. XP is roughly six times more common in Japanese people than in other groups.",
        "symptoms": ["edema", "phobia", "dry skin", "scaly skin", "urticaria", "ataxia", "gas", "blister"],
        "url": "https://en.wikipedia.org/wiki/Xeroderma_pigmentosum"
    },
    "Epidermolysis bullosa": {
        "summary": "Epidermolysis bullosa (EB) is a group of inherited connective tissue diseases that cause blisters in the skin and mucosal membranes, with an incidence of 20 per million newborns in the United States. It is a result of a defect in anchoring between the epidermis and dermis, resulting in friction and skin fragility. Its severity ranges from mild to lethal.",
        "symptoms": ["edema", "urticaria", "trauma", "blister"],
        "url": "https://en.wikipedia.org/wiki/Epidermolysis_bullosa"
    },
    "Paramyotonia congenita": {
        "summary": "Paramyotonia congenita (PC), also known as paramyotonia congenita of von Eulenburg or Eulenburg disease, is a rare congenital autosomal dominant neuromuscular disorder characterized by \u201cparadoxical\u201d myotonia. This type of myotonia has been termed paradoxical because it becomes worse with exercise whereas classical myotonia, as seen in myotonia congenita, is alleviated by exercise. PC is also distinguished as it can be induced by cold temperatures. Although more typical of the periodic paralytic disorders, patients with PC may also have potassium-provoked paralysis. PC typically presents within the first decade of life and has 100% penetrance. Patients with this disorder commonly present with myotonia in the face or upper extremities. The lower extremities are generally less affected. While some other related disorders result in muscle atrophy, this is not normally the case with PC. This disease can also present as hyperkalemic periodic paralysis and there is debate as to whether the two disorders are actually distinct.",
        "symptoms": ["weakness", "deafness", "asthenia", "seizure", "hyperthermia", "ataxia", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Paramyotonia_congenita"
    },
    "Ichthyosis bullosa of Siemens": {
        "summary": "Ichthyosis bullosa of Siemens is a type of familial, autosomal dominant ichthyosis, a rare skin disorder.:491 It is also known as bullous congenital ichthyosiform erythroderma of Siemens or ichthyosis exfoliativa. It is a genetic disorder with no known cure which is estimated to affect about 1 in 500,000 people.",
        "symptoms": ["trauma", "myopathy", "ataxia", "cirrhosis", "sweating", "blister"],
        "url": "https://en.wikipedia.org/wiki/Ichthyosis_bullosa_of_Siemens"
    },
    "Hemiballismus": {
        "summary": "Ballismus or ballism (called hemiballismus or hemiballism in its unilateral form) is a very rare movement disorder. It is a type of chorea caused in most cases by a decrease in activity of the subthalamic nucleus of the basal ganglia, resulting in the appearance of flailing, ballistic, undesired movements of the limbs. It can also appear rarely due to certain metabolic abnormalities. It is a rare movement disorder, being 500 times rarer than Parkinson's disease. Hemiballismus can cause significant disability. Symptoms can decrease during sleep.",
        "symptoms": ["akathisia", "edema", "weakness", "trauma", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea"],
        "url": "https://en.wikipedia.org/wiki/Hemiballismus"
    },
    "Lysosomal acid lipase deficiency": {
        "summary": "Lysosomal acid lipase deficiency (or LAL deficiency or LAL-D) happens when the body does not produce enough active lysosomal acid lipase (LAL) enzyme. This enzyme plays an important role in breaking down fatty material (cholesteryl esters and triglycerides) in the body. Infants, children and adults that suffer from LAL Deficiency experience a range of serious health problems. The lack of the LAL enzyme can lead to a build-up of fatty material in a number of body organs including the liver, spleen, gut, in the wall of blood vessels and other important organs.",
        "symptoms": ["cachexia", "steatorrhea", "poor growth", "trauma", "jaundice", "swelling", "itchiness", "fatty stools", "vomiting", "fever", "yellowing of the skin", "liver failure", "infertility", "dark urine", "cirrhosis", "gas", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Lysosomal_acid_lipase_deficiency"
    },
    "Deficiency of the interleukin-1\u2013receptor antagonist": {
        "summary": "Deficiency of the interleukin-1\u2013receptor antagonist (DIRA) is a rare, autosomal recessive, genetic autoinflammatory syndrome resulting from mutations in IL1RN, the gene encoding the interleukin 1 receptor antagonist.",
        "symptoms": ["deformity", "rash", "swelling", "inflammation", "pustule"],
        "url": "https://en.wikipedia.org/wiki/Deficiency_of_the_interleukin-1%E2%80%93receptor_antagonist"
    },
    "Pfeiffer syndrome": {
        "summary": "Pfeiffer syndrome is a very rare genetic disorder characterized by the premature fusion of certain bones of the skull which affects the shape of the head and face. In addition, the syndrome includes abnormalities of the hands (such as wide and deviated thumbs) and feet (such as wide and deviated big toes). Pfeiffer syndrome affects about 1 in 100,000 births.",
        "symptoms": ["edema", "dental problem", "asthenia", "hearing loss", "ptosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Pfeiffer_syndrome"
    },
    "Worth syndrome": {
        "summary": "Worth syndrome, also known as benign form of Worth hyperostosis corticalis generalisata with torus platinus, autosomal dominant osteosclerosis, autosomal dominant endosteal hyperostosis or Worth disease, is a rare autosomal dominant congenital disorder that is caused by a mutation in the LRP5 gene. It is characterized by increased bone density and benign bony structures on the palate.",
        "symptoms": ["asthenia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Worth_syndrome"
    },
    "Lamellar ichthyosis": {
        "summary": "Lamellar ichthyosis, also known as ichthyosis lamellaris and nonbullous congenital ichthyosis, is a rare inherited skin disorder, affecting around 1 in 600,000 people.",
        "symptoms": ["edema", "hair loss", "dehydration", "irritation", "overdose", "urticaria", "hypothermia", "skin infection", "sweating", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Lamellar_ichthyosis"
    },
    "Cri du chat": {
        "summary": "Cri du chat syndrome, also known as chromosome 5p deletion syndrome, 5p\u2212 (said minus) syndrome or Lejeune\u2019s syndrome, is a rare genetic disorder due to chromosome deletion on chromosome 5. Its name is a French term (cat-cry or call of the cat) referring to the characteristic cat-like cry of affected children. It was first described by J\u00e9r\u00f4me Lejeune in 1963. The condition affects an estimated 1 in 50,000 live births across all ethnicities and is more common in females by a 4:3 ratio.",
        "symptoms": ["poor growth", "hyperactivity", "aggression", "scoliosis", "infertility", "drooling"],
        "url": "https://en.wikipedia.org/wiki/Cri_du_chat"
    },
    "Ogilvie syndrome": {
        "summary": "Ogilvie syndrome is the acute dilation of the colon in the absence of any mechanical obstruction in severely ill patients.",
        "symptoms": ["dyspepsia", "steatorrhea", "bleeding", "abscess", "nausea", "constipation", "arrhythmia", "melena", "vomiting", "liver failure", "ptosis", "cirrhosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Ogilvie_syndrome"
    },
    "Refsum disease": {
        "summary": "Refsum disease, also known as classic or adult Refsum disease, heredopathia atactica polyneuritiformis, phytanic acid oxidase deficiency and phytanic acid storage disease, is an autosomal recessive neurological disease that results from the over-accumulation of phytanic acid in cells and tissues. It is one of several disorders named after Norwegian neurologist Sigvald Bernhard Refsum (1907\u20131991). Refsum disease typically is adolescent onset and is diagnosed by above average levels of phytanic acid. Humans obtain the necessary phytanic acid primarily through diet. It is still unclear what function phytanic acid plays physiologically in humans, but has been found to regulate fatty acid metabolism in the liver of mice.",
        "symptoms": ["blindness", "deformity", "hearing loss", "scaly skin", "ataxia", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Refsum_disease"
    },
    "Poland syndrome": {
        "summary": "Poland syndrome is a rare birth defect characterized by underdevelopment or absence of the chest muscle (pectoralis) on one side of the body, and usually also webbing of the fingers (cutaneous syndactyly) of the hand on the same side (the ipsilateral hand). In most affected individuals, the missing part is the large section of the muscle that normally attaches to the upper arm on one side and the breastbone (sternum) on the other. Other abnormalities may occur on the affected side of the torso. In some cases, additional muscles in the chest wall, side, and shoulder are missing or underdeveloped.",
        "symptoms": ["scoliosis", "deformity", "gas"],
        "url": "https://en.wikipedia.org/wiki/Poland_syndrome"
    },
    "X-linked recessive hypoparathyroidism": {
        "summary": "X-linked recessive hypoparathyroidism is a rare, congenital form of hypoparathyroidism.",
        "symptoms": ["edema", "seizure", "paresthesia", "tired", "twitch", "irritability", "twitching"],
        "url": "https://en.wikipedia.org/wiki/X-linked_recessive_hypoparathyroidism"
    },
    "Argininosuccinic aciduria": {
        "summary": "Argininosuccinic aciduria, also called argininosuccinic acidemia, is an inherited disorder that causes the accumulation of argininosuccinic acid (also known as \"ASA\") in the blood and urine. Some patients may also have an elevation of ammonia, a toxic chemical, which can affect the nervous system. Argininosuccinic aciduria may become evident in the first few days of life because of high blood ammonia, or later in life presenting with \"sparse\" or \"brittle\" hair, developmental delay, and tremors.",
        "symptoms": ["tremor", "seizure", "skin lesion", "tremors"],
        "url": "https://en.wikipedia.org/wiki/Argininosuccinic_aciduria"
    },
    "Griscelli syndrome": {
        "summary": "Griscelli syndrome is a rare autosomal recessive disorder characterized by albinism (hypopigmentation) with immunodeficiency, that usually causes death by early childhood.",
        "symptoms": ["ataxia", "deafness", "gas", "hyperpigmentation"],
        "url": "https://en.wikipedia.org/wiki/Griscelli_syndrome"
    },
    "Seaver Cassidy syndrome": {
        "summary": "Seaver Cassidy syndrome is a very rare disorder characterized by certain facial, genital, and skeletal deformities, as well as an unusual susceptibility to bleeding. Seaver Cassidy syndrome was first described in 1991 by Laurie Seaver and Suzanne Cassidy.",
        "symptoms": ["ptosis", "bleeding"],
        "url": "https://en.wikipedia.org/wiki/Seaver_Cassidy_syndrome"
    },
    "Tietz syndrome": {
        "summary": "Tietz syndrome, also called Tietz albinism-deafness syndrome or albinism and deafness of Tietz, is an autosomal dominant congenital disorder characterized by deafness and leucism. It is caused by a mutation in the microphthalmia-associated transcription factor (MITF) gene. Tietz syndrome was first described in 1963 by Walter Tietz (1927\u20132003) a German Physician working in California.",
        "symptoms": ["edema", "deafness", "hearing loss", "rash", "hyperpigmentation", "gas"],
        "url": "https://en.wikipedia.org/wiki/Tietz_syndrome"
    },
    "Confluent and reticulated papillomatosis": {
        "summary": "Confluent and reticulated papillomatosis of Gougerot and Carteaud (also known as \"Confluent and reticulated papillomatosis,\" \"CRP\", \"CARP\", \"Familial cutaneous papillomatosis,\" and \"Familial occurrence of confluent and reticulated papillomatosis\") is an uncommon but distinctive acquired ichthyosiform dermatosis characterized by persistent dark, scaly, papules and plaques that tend to be localized predominantly on the central trunk.",
        "symptoms": ["edema", "urticaria"],
        "url": "https://en.wikipedia.org/wiki/Confluent_and_reticulated_papillomatosis"
    },
    "Tubulointerstitial nephritis and uveitis": {
        "summary": "Tubulointerstitial nephritis and uveitis (TINU) is a rare medical condition in which there is uveitis (inflammation of the uvea in the eye) together with tubulointerstitial nephritis (inflammation of the tubules inside the kidney).",
        "symptoms": ["joint pain", "loss of appetite", "inflammation", "fever", "abdominal pain", "fatigue", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Tubulointerstitial_nephritis_and_uveitis"
    },
    "Mismatch repair cancer syndrome": {
        "summary": "Mismatch repair cancer syndrome (MMRCS) is a cancer syndrome associated with biallelic DNA mismatch repair mutations. It is also known as Turcot syndrome (after Jacques Turcot, who described the condition in 1959) and by several other names.",
        "symptoms": ["ataxia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Mismatch_repair_cancer_syndrome"
    },
    "Rabson\u2013Mendenhall syndrome": {
        "summary": "Rabson\u2013Mendenhall syndrome is a rare autosomal recessive disorder characterized by severe insulin resistance. The disorder is caused by mutations in the insulin receptor gene. Symptoms include growth abnormalities of the head, face and nails, along with the development of acanthosis nigricans. Treatment involves controlling blood glucose levels by using insulin and incorporating a strategically planned, controlled diet. Also, direct actions against other symptoms may be taken (e.g. surgery for facial abnormalities) This syndrome usually affects children and has a prognosis of 1\u20132 years.",
        "symptoms": ["edema", "low blood sugar", "asthenia", "high blood sugar", "hyperpigmentation", "hirsutism", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Rabson%E2%80%93Mendenhall_syndrome"
    },
    "Malonyl-CoA decarboxylase deficiency": {
        "summary": "Malonyl-CoA decarboxylase deficiency (MCD), or Malonic aciduria is an autosomal-recessive metabolic disorder caused by a genetic mutation that disrupts the activity of Malonyl-Coa decarboxylase. This enzyme breaks down Malonyl-CoA (a fatty acid precursor and a fatty acid oxidation blocker) into Acetyl-CoA and carbon dioxide.",
        "symptoms": ["seizure", "vomiting", "low blood sugar", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Malonyl-CoA_decarboxylase_deficiency"
    },
    "Cogan syndrome": {
        "summary": "Cogan syndrome is a rare disorder characterized by recurrent inflammation of the front of the eye (the cornea) and often fever, fatigue, and weight loss, episodes of dizziness, and hearing loss. It can lead to deafness or blindness if untreated. The classic form of the disease was first described by D.G. Cogan in 1945.",
        "symptoms": ["red eye", "vertigo", "edema", "diplopia", "phobia", "blindness", "deafness", "abscess", "nausea", "inflammation", "hearing loss", "dizziness", "fever", "vomiting", "tinnitus", "nystagmus", "exophthalmos", "ptosis", "fatigue", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Cogan_syndrome"
    },
    "Infantile free sialic acid storage disease": {
        "summary": "Infantile free sialic acid storage disease (ISSD) is a lysosomal storage disease caused when sialic acid, a kind of charged sugar, is unable to be transported out of the lysosomal membrane and instead, accumulates in the tissue and free sialic acid is excreted in the urine. Mutations in the SLC17A5 (solute carrier family 17 (anion/sugar transporter), member 50) gene cause all forms of sialic acid storage disease. The SLC17A5 gene is located on the long (q) arm of chromosome 6 between positions 14 and 15. This gene provides instructions for producing a protein called sialin that is located mainly on the membranes of lysosomes, compartments in the cell that digest and recycle materials.",
        "symptoms": ["seizure", "ataxia"],
        "url": "https://en.wikipedia.org/wiki/Infantile_free_sialic_acid_storage_disease"
    },
    "CLOVES syndrome": {
        "summary": "CLOVES syndrome is an extremely rare overgrowth syndrome, with complex vascular anomalies. CLOVES syndrome affects people with various symptoms, ranging from mild fatty soft-tissue tumors to vascular malformations encompassing the spine or internal organs. CLOVES syndrome is closely linked to other overgrowth disorders like proteus syndrome, Klippel\u2013Tr\u00e9naunay syndrome, Sturge\u2013Weber syndrome, and hemihypertrophy, to name a few.",
        "symptoms": ["paralysis", "scoliosis"],
        "url": "https://en.wikipedia.org/wiki/CLOVES_syndrome"
    },
    "Meleda disease": {
        "summary": "Meleda disease (MDM) or \"mal de Meleda\", also called Mljet disease, keratosis palmoplantaris and transgradiens of siemens, (also known as \"Acral keratoderma,\" \"Mutilating palmoplantar keratoderma of the Gamborg-Nielsen type,\" \"Palmoplantar ectodermal dysplasia type VIII\",:508 and \"Palmoplantar keratoderma of the Norrbotten type\") is an extremely rare autosomal recessive congenital skin disorder in which dry, thick patches of skin develop on the soles of the hands and feet, a condition known as palmoplantar hyperkeratosis.:214",
        "symptoms": ["edema", "urticaria"],
        "url": "https://en.wikipedia.org/wiki/Meleda_disease"
    },
    "Galactose epimerase deficiency": {
        "summary": "Galactose epimerase deficiency, also known as GALE deficiency, Galactosemia III and UDP-galactose-4-epimerase deficiency, is a rare, autosomal recessive form of galactosemia associated with a deficiency of the enzyme galactose epimerase.",
        "symptoms": ["liver failure", "jaundice", "gas", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Galactose_epimerase_deficiency"
    },
    "Myositis ossificans": {
        "summary": "Myositis ossificans comprises two syndromes characterized by heterotopic ossification (calcification) of muscle.",
        "symptoms": ["edema", "muscle weakness", "weakness", "trauma", "inflammation", "muscle spasm", "myalgia", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Myositis_ossificans"
    },
    "Non-24-hour sleep\u2013wake disorder": {
        "summary": "Non-24-hour sleep\u2013wake disorder (non-24), is one of several chronic circadian rhythm sleep disorders (CRSDs). It is defined as a \"chronic steady pattern comprising [...] daily delays in sleep onset and wake times in an individual living in society.\" Symptoms result when the non-entrained (free-running) endogenous circadian rhythm drifts out of alignment with the light/dark cycle in nature.",
        "symptoms": ["joint pain", "sleep apnea", "confusion", "head injury", "hair loss", "hallucination", "insomnia", "blindness", "nausea", "paralysis", "hypoventilation", "sleep disorders", "obesity", "depressed", "snoring", "headache", "weight gain", "apraxia", "ataxia", "fatigue", "somnolence"],
        "url": "https://en.wikipedia.org/wiki/Non-24-hour_sleep%E2%80%93wake_disorder"
    },
    "Weissenbacher\u2013Zweym\u00fcller syndrome": {
        "summary": "Weissenbacher\u2013Zweymuller syndrome (WZS), also called Pierre-Robin syndrome with fetal chondrodysplasia, is an autosomal recessive congenital disorder, linked to mutations (955 gly -> glu) in the COL11A2 gene (located on chromosomal position 6p21.3), which codes for the \u03b12 strand of collagen type XI. It is a collagenopathy, types II and XI disorder.",
        "symptoms": ["skeletal malformation", "myopathy", "deafness", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Weissenbacher%E2%80%93Zweym%C3%BCller_syndrome"
    },
    "Osteogenesis imperfecta": {
        "summary": "Osteogenesis imperfecta (OI) is a group of genetic disorders that mainly affect the bones. It results in bones that break easily. The severity may be mild to severe. Other symptoms may include a blue tinge to the whites of the eye, short height, loose joints, hearing loss, breathing problems, and problems with the teeth.",
        "symptoms": ["trauma", "deformity", "scoliosis", "hearing loss", "breathing problems", "bone fragility", "bone deformity", "ptosis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Osteogenesis_imperfecta"
    },
    "Congenital ichthyosiform erythroderma": {
        "summary": "Congenital Ichthyosiform Erythroderma (CIE), also known as Nonbullous congenital ichthyosiform erythroderma:484 is a rare type the ichthyosis family of skin diseases which occurs in 1 in 200,000 to 300,000 births.",
        "symptoms": ["edema", "urticaria", "hair loss", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Congenital_ichthyosiform_erythroderma"
    },
    "Mitochondrial neurogastrointestinal encephalopathy syndrome": {
        "summary": "Mitochondrial neurogastrointestinal encephalopathy syndrome (MNGIE) is a rare autosomal recessive mitochondrial disease. It has been previously referred to as polyneuropathy, ophthalmoplegia, leukoencephalopathy, and POLIP syndrome. The disease presents in childhood, but often goes unnoticed for decades. Unlike typical mitochondrial diseases caused by mitochondrial DNA (mtDNA) mutations, MNGIE is caused by mutations in the TYMP gene, which encodes the enzyme thymidine phosphorylase. Mutations in this gene result in impaired mitochondrial function, leading to intestinal symptoms as well as neuro-ophthalmologic abnormalities. A secondary form of MNGIE, called MNGIE without leukoencephalopathy, can be caused by mutations in the POLG gene.",
        "symptoms": ["weakness", "nausea", "weight loss", "hearing loss", "constipation", "vomiting", "abdominal pain", "gastrointestinal issues", "decreased motility", "ptosis", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Mitochondrial_neurogastrointestinal_encephalopathy_syndrome"
    },
    "EAST syndrome": {
        "summary": "EAST syndrome is a syndrome consisting of epilepsy, ataxia (a movement disorder), sensorineural deafness (deafness because of problems with the hearing nerve) and salt-wasting renal tubulopathy (salt loss caused by kidney problems). The tubulopathy (renal tubule abnormalities) in this condition predispose to hypokalemic (low potassium) metabolic alkalosis with normal blood pressure. Hypomagnesemia (low blood levels of magnesium) may also be present.",
        "symptoms": ["confusion", "deafness", "seizure", "loss of balance", "hearing loss", "low blood pressure", "hyperthermia", "loss of consciousness", "ataxia", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/EAST_syndrome"
    },
    "Leydig cell hypoplasia": {
        "summary": "Leydig cell hypoplasia (or aplasia) (LCH), also known as Leydig cell agenesis, is a rare autosomal recessive genetic and endocrine syndrome affecting an estimated 1 in 1,000,000 biological males. It is characterized by an inability of the body to respond to luteinizing hormone (LH), a gonadotropin which is normally responsible for signaling Leydig cells of the testicles to produce testosterone and other androgen sex hormones. The condition manifests itself as pseudohermaphroditism (partially or fully underdeveloped genitalia), hypergonadotropic hypogonadism (decreased or lack of production of sex steroids by the gonads despite high circulating levels of gonadotropins), reduced or absent puberty (lack of development of secondary sexual characteristics, resulting in sexual infantilism if left untreated), and infertility.",
        "symptoms": ["edema", "asthenia", "rash", "sterility", "infertility", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Leydig_cell_hypoplasia"
    },
    "Congenital insensitivity to pain with anhidrosis": {
        "summary": "Congenital insensitivity to pain with anhidrosis (CIPA), also called hereditary sensory and autonomic neuropathy type IV, is an extremely rare inherited disorder of the nervous system which prevents the sensation of pain, heat, cold, or any real nerve-related sensations (including feeling the need to urinate); however, patients can still feel pressure. CIPA is the fourth type of hereditary sensory and autonomic neuropathy (HSAN), known as HSAN IV. (It is also referred to as HSAN Type IV). A person with CIPA cannot feel pain or differentiate even extreme temperatures. \"Anhidrosis\" means the body does not sweat, and \"congenital\" indicates that the condition is present from birth.",
        "symptoms": ["chronic pain", "trauma", "sore throat", "asthenia", "tachycardia", "hyperthermia", "headache", "hypotension", "odynophagia", "myalgia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Congenital_insensitivity_to_pain_with_anhidrosis"
    },
    "Vici syndrome": {
        "summary": "Vici syndrome, also called immunodeficiency with cleft lip/palate, cataract, hypopigmentation and absent corpus callosum, is a rare autosomal recessive congenital disorder characterized by albinism, agenesis of the corpus callosum, cataracts, cardiomyopathy, severe psychomotor retardation, seizures, immunodeficiency, and recurrent severe infections.",
        "symptoms": ["edema", "seizure", "hearing loss", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Vici_syndrome"
    },
    "Cooks syndrome": {
        "summary": "Cooks syndrome is a hereditary disorder which is characterized in the hands by bilateral nail hypoplasia on the thumb, index finger, and middle finger, absence of fingernails (anonychia) on the ring finger and little finger, lengthening of the thumbs, and bulbousness of the fingers. In the feet, it is characterized by absence of toenails and absence/hypoplasia of the distal phalanges. In the second study of this disorder, it was found that the intermediate phalanges, proximal phalanges, and metacarpals were unaffected.",
        "symptoms": ["deafness"],
        "url": "https://en.wikipedia.org/wiki/Cooks_syndrome"
    },
    "Cyclopia": {
        "summary": "Cyclopia (also cyclocephaly or synophthalmia) is a rare form of holoprosencephaly and is a congenital disorder (birth defect) characterized by the failure of the embryonic prosencephalon to properly divide the orbits of the eye into two cavities. Its incidence is 1 in 16,000 in born animals and 1 in 200 in miscarried fetuses.",
        "symptoms": ["edema", "vomiting", "gas"],
        "url": "https://en.wikipedia.org/wiki/Cyclopia"
    },
    "Mesothelioma": {
        "summary": "Mesothelioma is a type of cancer that develops from the thin layer of tissue that covers many of the internal organs (known as the mesothelium). The most common area affected is the lining of the lungs and chest wall. Less commonly the lining of the abdomen and rarely the sac surrounding the heart, or the sac surrounding the testis may be affected. Signs and symptoms of mesothelioma may include shortness of breath due to fluid around the lung, a swollen abdomen, chest wall pain, cough, feeling tired, and weight loss. These symptoms typically come on slowly.",
        "symptoms": ["aching", "nausea", "fever", "abdominal pain", "cough", "cachexia", "jaundice", "swelling", "tinnitus", "chest pain", "swollen abdomen", "tired", "gas", "abdominal swelling", "hemoptysis", "wheezing", "vomiting", "poor appetite", "ptosis", "bleeding", "weight loss", "low blood sugar", "hearing loss", "constipation", "shortness of breath", "sweats", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Mesothelioma"
    },
    "Enterolith": {
        "summary": "An enterolith is a mineral concretion or calculus formed anywhere in the gastrointestinal system. Enteroliths are uncommon and usually incidental findings but, once found, they require at a minimum watchful waiting. If there is evidence of complications, they must be removed.",
        "symptoms": ["gas"],
        "url": "https://en.wikipedia.org/wiki/Enterolith"
    },
    "Kapur\u2013Toriello syndrome": {
        "summary": "Kapur\u2013Toriello syndrome is a rare autosomal recessive genetic disorder. The defining feature of Kapur\u2013Toriello syndrome is abnormal morphology of the columella, which extends below the margin of the nares.",
        "symptoms": ["constipation"],
        "url": "https://en.wikipedia.org/wiki/Kapur%E2%80%93Toriello_syndrome"
    },
    "Ehlers\u2013Danlos syndrome": {
        "summary": "Ehlers\u2013Danlos syndrome (EDS) is a group of genetic connective tissue disorders. Symptoms can vary from mildly loose joints to life-threatening complications such as aortic dissection. Chronic pain or early osteoarthritis may also occur.",
        "symptoms": ["joint pain", "weakness", "abdominal pain", "ataxia", "scoliosis", "muscle weakness", "sleep apnea", "gas", "myopathy", "heart murmur", "tachycardia", "paresthesia", "sneezing", "bleeding", "myalgia", "chronic pain", "deformity", "trauma", "depression", "tremor", "unstable joints", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Ehlers%E2%80%93Danlos_syndrome"
    },
    "Persistent M\u00fcllerian duct syndrome": {
        "summary": "Persistent M\u00fcllerian duct syndrome (PMDS) is the presence of M\u00fcllerian duct derivatives (fallopian tubes, uterus, and/or the upper part of the vagina) in what would be considered a genetically male animal by typical human based standards. In humans, PMDS typically is due to an autosomal recessive congenital disorder and is considered by some to be a form of pseudohermaphroditism due to the presence of M\u00fcllerian derivatives.",
        "symptoms": ["asthenia", "infertility", "ptosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Persistent_M%C3%BCllerian_duct_syndrome"
    },
    "Bladder exstrophy": {
        "summary": "Bladder exstrophy (also known as Ectopia vesicae) is a congenital anomaly that exists along the spectrum of the exstrophy-epispadias complex and most notably involves protrusion of the urinary bladder through a defect in the abdominal wall. Its presentation is variable, often including abnormalities of the bony pelvis, pelvic floor, and genitalia. The underlying embryologic mechanism leading to bladder exstrophy is unknown, though it is thought to be in part due to failed reinforcement of the cloacal membrane by underlying mesoderm.",
        "symptoms": ["urinary incontinence", "incontinence"],
        "url": "https://en.wikipedia.org/wiki/Bladder_exstrophy"
    },
    "True hermaphroditism": {
        "summary": "True hermaphroditism, also known as ovotesticular disorder of sex development, is a medical term for an intersex condition in which an individual is born with ovarian and testicular tissue. There may be an ovary underneath one testicle or the other,[citation needed] but more commonly one or both gonads is an ovotestis containing both types of tissue.",
        "symptoms": ["sterility"],
        "url": "https://en.wikipedia.org/wiki/True_hermaphroditism"
    },
    "Bloom syndrome": {
        "summary": "Bloom syndrome (often abbreviated as BS in literature), also known as Bloom-Torre-Machacek syndrome, is a rare autosomal recessive disorder characterized by short stature, predisposition to the development of cancer and genomic instability. BS is caused by mutations in the BLM gene leading to mutated DNA helicase protein formation. Cells from a person with Bloom syndrome exhibit a striking genomic instability that includes excessive crossovers between homologous chromosomes and sister chromatid exchanges (SCEs). The condition was discovered and first described by New York dermatologist Dr. David Bloom in 1954.",
        "symptoms": ["edema", "infertility", "rash", "urticaria", "skin rash", "ataxia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Bloom_syndrome"
    },
    "Ollier disease": {
        "summary": "Ollier disease is a rare nonhereditary sporadic disorder where intraosseous benign cartilaginous tumors (enchondroma) develop close to growth plate cartilage. Prevalence is estimated at around 1 in 100,000.",
        "symptoms": ["aching"],
        "url": "https://en.wikipedia.org/wiki/Ollier_disease"
    },
    "Pelizaeus\u2013Merzbacher disease": {
        "summary": "Pelizaeus\u2013Merzbacher disease (PMD) is a rare central nervous system disorder in which coordination, motor abilities, and intellectual function are delayed to variable extents.",
        "symptoms": ["akathisia", "edema", "weakness", "blindness", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "scoliosis", "hypoventilation", "sleep disorders", "convulsions", "headache", "nystagmus", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Pelizaeus%E2%80%93Merzbacher_disease"
    },
    "Netherton syndrome": {
        "summary": "Netherton syndrome is a severe, autosomal recessive form of ichthyosis associated with mutations in the SPINK5 gene. It is named after Earl W. Netherton (1910\u20131985), an American dermatologist who discovered it in 1958.",
        "symptoms": ["edema", "hyperactivity", "inflammation", "dehydration", "urticaria", "skin infection"],
        "url": "https://en.wikipedia.org/wiki/Netherton_syndrome"
    },
    "Kleine\u2013Levin syndrome": {
        "summary": "Kleine\u2013Levin syndrome (KLS), also known as Sleeping Beauty syndrome, is a rare sleep disorder characterized by persistent episodic hypersomnia and cognitive or mood changes. Many patients also experience hyperphagia, hypersexuality and other symptoms. Patients generally experience recurrent episodes of the condition for more than a decade. Individual episodes generally last more than a week but less than a month. The condition greatly affects the personal, professional, and social lives of sufferers, but symptoms spontaneously resolve and seldom cause permanent issues. The severity of symptoms and the course of the syndrome vary between sufferers. Patients commonly have about 20 episodes over about a decade. Several months generally elapse between episodes. The onset of the condition usually follows a viral infection; several different viruses have been observed to trigger KLS. It is generally only diagnosed after similar conditions have been excluded; MRI, CT scans, lumbar puncture, and toxicology tests are used to rule out other possibilities. The syndrome's mechanism is not known, but the thalamus is thought to possibly play a role. Tomography has shown hypoperfusion in the brains of patients during episodes.",
        "symptoms": ["edema", "aphasia", "seizure", "excessive appetite", "anxiety", "fever", "insomnia", "substance abuse", "hallucination", "headache", "irritability", "sleep apnea", "confusion", "head injury", "abscess", "inflammation", "obesity", "hypotension", "delusion", "paralysis", "akathisia", "hypoventilation", "sleep disorders", "snoring", "depression", "tired", "cataplexy", "tremor", "ataxia", "somnolence"],
        "url": "https://en.wikipedia.org/wiki/Kleine%E2%80%93Levin_syndrome"
    },
    "Corticobasal degeneration": {
        "summary": "Corticobasal degeneration (CBD) or corticobasal ganglionic degeneration (CBGD) is a rare, progressive neurodegenerative disease involving the cerebral cortex and the basal ganglia. CBD symptoms typically begin in people from 50\u201370 years of age, and the average disease duration is six years. It is characterized by marked disorders in movement and cognitive dysfunction, and is classified as one of the Parkinson plus syndromes. Clinical diagnosis is difficult, as symptoms of CBD are often similar to those of other disorders, such as Parkinson's disease (PD), progressive supranuclear palsy (PSP), and dementia with Lewy bodies (DLB). Due to the various clinical presentations associated with CBD, a final diagnosis can only be made upon neuropathologic examination.",
        "symptoms": ["aphasia", "dysarthria", "numbness", "psychiatric problem", "depression", "incontinence", "bradykinesia", "apraxia", "irritability", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Corticobasal_degeneration"
    },
    "Turner syndrome": {
        "summary": "Turner syndrome (TS), also known as 45,X or 45,X0, is a condition in which a female is partly or completely missing an X chromosome. Signs and symptoms vary among those affected. Often, a short and webbed neck, low-set ears, low hairline at the back of the neck, short stature, and swollen hands and feet are seen at birth. Typically, they only develop menstrual periods and breasts with hormone treatment, and are unable to have children without reproductive technology. Heart defects, diabetes, and low thyroid hormone occur more frequently. Most people with TS have normal intelligence. Many, however, have troubles with spatial visualization that may be needed for mathematics. Vision and hearing problems occur more often.",
        "symptoms": ["edema", "mania", "hyperactivity", "drooping eyelid", "swelling", "scoliosis", "hearing loss", "obesity", "learning difficulties", "sterility", "infertility", "bleeding"],
        "url": "https://en.wikipedia.org/wiki/Turner_syndrome"
    },
    "Lutembacher's syndrome": {
        "summary": "Lutembacher's syndrome is a form of congenital heart disease. Lutembacher's syndrome was first described by a French cardiologist by the name of Rene' Lutembacher (1884\u20131968) of Paris, France in 1916. Lutembacher syndrome is a rare disease that affects one of the chambers of the heart as well as a valve of the heart. Lutembacher's syndrome is known to affect females more often than males. Lutembacher is an extremely rare disease. Lutembacher's can affect children or adults; the person can either be born with the disorder or develop it later in life.",
        "symptoms": ["edema", "dyspnea", "palpitation", "weight gain", "hemoptysis", "swelling", "heart murmur", "abnormal heart sound", "arrhythmia", "fever", "shortness of breath", "chest pain", "tired", "itching", "bleeding", "fatigue", "cough", "gas", "weight loss"],
        "url": "https://en.wikipedia.org/wiki/Lutembacher%27s_syndrome"
    },
    "Spitz nevus": {
        "summary": "A Spitz nevus (also known as an epithelioid and spindle-cell nevus, benign juvenile melanoma,:691 and \"Spitz's juvenile melanoma\") is a benign melanocytic nevus, a type of skin lesion, affecting the epidermis and dermis.",
        "symptoms": ["skin lesion"],
        "url": "https://en.wikipedia.org/wiki/Spitz_nevus"
    },
    "Hereditary sensory and autonomic neuropathy": {
        "summary": "32501 32096",
        "symptoms": ["aching", "weakness", "hyperthermia", "hypothermia", "poor growth", "tingling", "scoliosis", "numbness", "dizziness", "headache", "blurred vision", "muscle weakness", "gas", "hyperactivity", "deafness", "tachycardia", "depressed", "vomiting", "hypotension", "odynophagia", "ptosis", "chronic pain", "apnea", "deformity", "trauma", "sore throat", "high blood pressure", "hearing loss", "myalgia", "incoordination", "sweating"],
        "url": "https://en.wikipedia.org/wiki/Hereditary_sensory_and_autonomic_neuropathy"
    },
    "Dracunculiasis": {
        "summary": "Dracunculiasis, also called Guinea-worm disease (GWD), is an infection by the Guinea worm. A person becomes infected when they drink water that contains water fleas infected with guinea worm larvae. Initially there are no symptoms. About one year later, the person develops a painful burning feeling as the female worm forms a blister in the skin, usually on the lower limb. The worm then comes out of the skin over the course of a few weeks. During this time, it may be difficult to walk or work. It is very uncommon for the disease to cause death.",
        "symptoms": ["boil", "edema", "mania", "blindness", "nausea", "change in behavior", "swelling", "paralysis", "dizziness", "rash", "vomiting", "skin ulcers", "fever", "gas", "blister"],
        "url": "https://en.wikipedia.org/wiki/Dracunculiasis"
    },
    "Cenani\u2013Lenz syndactylism": {
        "summary": "Cenani\u2013Lenz syndactylism, also known as Cenani\u2013Lenz syndrome or Cenani\u2013syndactylism, is an autosomal recessive congenital malformation syndrome involving both upper and lower extremities.",
        "symptoms": ["scoliosis", "deformity", "gas", "asthenia"],
        "url": "https://en.wikipedia.org/wiki/Cenani%E2%80%93Lenz_syndactylism"
    },
    "Adenosine deaminase deficiency": {
        "summary": "Adenosine deaminase deficiency (also called ADA deficiency or ADA-SCID) is an autosomal recessive metabolic disorder that causes immunodeficiency. It occurs in fewer than one in 100,000 live births worldwide.",
        "symptoms": ["ataxia", "gas", "edema"],
        "url": "https://en.wikipedia.org/wiki/Adenosine_deaminase_deficiency"
    },
    "Donohue syndrome": {
        "summary": "Donohue syndrome (also known as Leprechaunism) is an extremely rare and severe genetic disorder. Leprechaunism derives its name from the fact that people with the disease often have elfin features and are smaller than usual. Affected individuals have an insulin receptor with greatly impaired functionality.",
        "symptoms": ["asthenia", "edema", "gas", "hyperpigmentation"],
        "url": "https://en.wikipedia.org/wiki/Donohue_syndrome"
    },
    "Neonatal diabetes mellitus": {
        "summary": "Neonatal diabetes mellitus (NDM) is a monogenic form of diabetes that occurs in the first 6 months of life. It is a rare disease, occurring in only one in 100,000 to 500,000 live births. Infants with NDM do not produce enough insulin, leading to an increase in blood glucose. NDM can be mistaken for the much more common type 1 diabetes, but type 1 diabetes usually occurs later than the first 6 months of life. In about half of those with NDM, the condition is lifelong and is called permanent neonatal diabetes mellitus (PNDM). In the rest of those with NDM, the condition is transient and disappears during infancy but can reappear later in life; this type of NDM is called transient neonatal diabetes mellitus (TNDM). Specific genes that can cause NDM have been identified.",
        "symptoms": ["dehydration", "itching", "gas"],
        "url": "https://en.wikipedia.org/wiki/Neonatal_diabetes_mellitus"
    },
    "Short-chain acyl-coenzyme A dehydrogenase deficiency": {
        "summary": "Short-chain acyl-coenzyme A dehydrogenase deficiency (SCADD), also called ACADS deficiency and SCAD deficiency, is an autosomal recessive fatty acid oxidation disorder which affects enzymes required to break down a certain group of fats called short chain fatty acids.[medical citation needed]",
        "symptoms": ["lack of energy", "low blood sugar", "weakness", "trauma", "seizure", "lethargy", "infertility", "vomiting", "muscle weakness", "gas"],
        "url": "https://en.wikipedia.org/wiki/Short-chain_acyl-coenzyme_A_dehydrogenase_deficiency"
    },
    "Adipsia": {
        "summary": "Adipsia, also known as hypodipsia, is a symptom of inappropriately decreased or absent feelings of thirst. It involves an increased osmolality or concentration of solute in the urine, which stimulates secretion of antidiuretic hormone (ADH) from the hypothalamus to the kidneys. This causes the person to retain water and ultimately become unable to feel thirst. Due to its rarity, the disorder has not been the subject of many research studies.",
        "symptoms": ["muscle weakness", "weakness", "trauma", "excessive thirst", "seizure", "lethargy", "convulsions", "insomnia", "bleeding", "gas"],
        "url": "https://en.wikipedia.org/wiki/Adipsia"
    },
    "Urofacial syndrome": {
        "summary": "Ochoa syndrome, also called urofacial syndrome or hydronephrosis with peculiar facial expression, is an autosomal recessive congenital disorder characterized by inverted facial expressions in association with obstructive disease of the urinary tract. The inverted facial expression presented by children with this syndrome allows for early detection of the syndrome, this inverted smile is easy to see when the child is smiling and laughing. Early detection is vital for establishing a better prognosis as urinary related problems associated with this disease can cause harm if left untreated. Incontinence is another easily detectable symptom of the syndrome that is due to detrusor-sphincter discoordination, although it can easily be mistaken for pyelonephritis.",
        "symptoms": ["constipation", "incontinence"],
        "url": "https://en.wikipedia.org/wiki/Urofacial_syndrome"
    },
    "Dysfibrinogenemia": {
        "summary": "The dysfibrinogenemias are a group of autosomal dominant disorders of qualitatively abnormal fibrinogens. There are more than 350 different fibrinogen abnormalities, each named after the place where it was discovered. Each dysfibrinogenemia is associated with slightly different effects on the thrombin time and on normal clotting. Some dysfibrinogenemias cause abnormal bleeding or even thrombosis, while others have no effect on either bleeding or thrombosis.",
        "symptoms": ["asthenia", "bleeding"],
        "url": "https://en.wikipedia.org/wiki/Dysfibrinogenemia"
    },
    "Walker\u2013Warburg syndrome": {
        "summary": "Walker\u2013Warburg syndrome (WWS), also called Warburg syndrome, Chemke syndrome, HARD syndrome (Hydrocephalus, Agyria and Retinal Dysplasia), Pagon syndrome, cerebroocular dysgenesis (COD) or cerebroocular dysplasia-muscular dystrophy syndrome (COD-MD), is a rare form of autosomal recessive congenital muscular dystrophy. It is associated with brain (lissencephaly, hydrocephalus, cerebellar malformations) and eye abnormalities. This condition has a worldwide distribution. The overall incidence is unknown but a survey in North-eastern Italy has reported an incidence rate of 1.2 per 100,000 live births. It is the most severe form of congenital muscular dystrophy with most children dying before the age of three years.",
        "symptoms": ["weakness", "asthenia", "seizure", "muscle weakness", "paralysis", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Walker%E2%80%93Warburg_syndrome"
    },
    "Caroli disease": {
        "summary": "Caroli disease is a rare inherited disorder characterized by dilation of the intrahepatic bile ducts. There are two types of Caroli disease, the most common being the simple, or isolated case where the bile ducts are widened by ectasia. The second, more complex, cause is commonly known as Caroli Syndrome. This complex form is also linked with portal hypertension and congenital hepatic fibrosis. The differences between the causes of the two cases have not yet been discovered. Caroli disease is also associated with liver failure and polycystic kidney disease. The disease affects about 1 in 1,000,000 people, with more reported cases of Caroli syndrome than of Caroli disease. ",
        "symptoms": ["jaundice", "abscess", "inflammation", "fever", "abdominal pain", "liver failure", "melena", "cirrhosis", "gas"],
        "url": "https://en.wikipedia.org/wiki/Caroli_disease"
    },
    "Synovial chondromatosis": {
        "summary": "Synovial chondromatosis (synonyms include synovial osteochondromatosis, primary synovial osteochondromatosis, and synovial chondrometaplasia) is a disease affecting the synovium, a thin flexible membrane around a joint. It is also known as Reichel's syndrome or Reichel-Jones-Henderson syndrome, named after Friedrich Paul Reichel, Hugh Toland Jones and Melvin Starkey Henderson.",
        "symptoms": ["blister"],
        "url": "https://en.wikipedia.org/wiki/Synovial_chondromatosis"
    },
    "Perlman syndrome": {
        "summary": "Perlman syndrome (PS) (also called renal hamartomas, nephroblastomatosis and fetal gigantism) is a rare overgrowth disorder present at birth. It is characterized by polyhydramnios and fetal overgrowth, including macrocephaly, neonatal macrosomia, visceromegaly, dysmorphic facial features, and an increased risk for Wilms' tumor at an early age. The prognosis for Perlman syndrome is poor and it is associated with a high neonatal mortality.",
        "symptoms": ["edema", "depressed", "gas"],
        "url": "https://en.wikipedia.org/wiki/Perlman_syndrome"
    },
    "Antithrombin III deficiency": {
        "summary": "Antithrombin III deficiency (abbreviated ATIII deficiency) is a deficiency of antithrombin III. It is a rare hereditary disorder that generally comes to light when a patient suffers recurrent venous thrombosis and pulmonary embolism, and repetitive intrauterine fetal death (IUFD). Inheritance is usually autosomal dominant, though a few recessive cases have been noted.",
        "symptoms": ["asthenia", "edema"],
        "url": "https://en.wikipedia.org/wiki/Antithrombin_III_deficiency"
    },
    "Florid cutaneous papillomatosis": {
        "summary": "Florid cutaneous papillomatosis (also known as the Schwartz-Burgess syndrome) is an obligate paraneoplastic syndrome.",
        "symptoms": ["edema", "anasarca", "skin lesion", "rash", "paresthesia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Florid_cutaneous_papillomatosis"
    },
    "Hypocementosis": {
        "summary": "Hypocementosis is a reduction in the amount of cementum on a tooth root. It is a feature of conditions such as cleidocranial dysplasia and hypophosphatasia.",
        "symptoms": ["edema", "trauma", "abscess", "laceration", "abrasion", "ptosis"],
        "url": "https://en.wikipedia.org/wiki/Hypocementosis"
    },
    "Autosomal recessive polycystic kidney disease": {
        "summary": "Autosomal recessive polycystic kidney disease (ARPKD) is the recessive form of polycystic kidney disease. It is associated with a group of congenital fibrocystic syndromes. Mutations in the PKHD1 (chromosomal locus 6p12.2) cause ARPKD.",
        "symptoms": ["polyuria"],
        "url": "https://en.wikipedia.org/wiki/Autosomal_recessive_polycystic_kidney_disease"
    },
    "Sly syndrome": {
        "summary": "Sly syndrome, also called Mucopolysaccharidosis Type VII or MPS, is an autosomal recessive lysosomal storage disease characterized by a deficiency of the enzyme \u03b2-glucuronidase, a lysosomal enzyme. Sly syndrome belongs to a group of disorders known as mucopolysaccharidoses, which are lysosomal storage diseases. In Sly syndrome, the deficiency in \u03b2-glucuronidase leads to the accumulation of certain complex carbohydrates (mucopolysaccharides) in many tissues and organs of the body.",
        "symptoms": ["scoliosis", "depressed", "protruding abdomen", "gas"],
        "url": "https://en.wikipedia.org/wiki/Sly_syndrome"
    },
    "Beta-ketothiolase deficiency": {
        "summary": "Beta-ketothiolase deficiency is a rare, autosomal recessive metabolic disorder in which the body cannot properly process the amino acid isoleucine or the products of lipid breakdown.",
        "symptoms": ["dehydration", "vomiting", "convulsions", "tired"],
        "url": "https://en.wikipedia.org/wiki/Beta-ketothiolase_deficiency"
    },
    "Superior canal dehiscence": {
        "summary": "Superior canal dehiscence syndrome (SCDS) is a rare medical condition of the inner ear, leading to hearing and balance symptoms in those affected. The symptoms are caused by a thinning or complete absence of the part of the temporal bone overlying the superior semicircular canal of the vestibular system. There is evidence that this rare defect, or susceptibility, is congenital. There are also numerous cases of symptoms arising after physical trauma to the head. It was first described in 1998 by Dr. Lloyd B. Minor of Johns Hopkins University, Baltimore, USA.",
        "symptoms": ["vertigo", "phobia", "trauma", "blindness", "abscess", "deafness", "nausea", "loss of balance", "hearing loss", "dizziness", "tinnitus", "nystagmus", "headache", "fatigue", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Superior_canal_dehiscence"
    },
    "Mulibrey nanism": {
        "summary": "Mulibrey nanism (\"MUscle-LIver-BRain-EYe nanism\"), also called Perheentupa syndrome and pericardial constriction with growth failure, is a rare autosomal recessive congenital disorder. It causes severe growth failure along with abnormalities of the heart, muscle, liver, brain and eye. TRIM37 is responsible for various cellular functions including developmental patterning.",
        "symptoms": ["trauma", "infertility", "gas"],
        "url": "https://en.wikipedia.org/wiki/Mulibrey_nanism"
    },
    "Neuromyelitis optica": {
        "summary": "Neuromyelitis optica (NMO), also known as Devic's disease or Devic's syndrome, is a heterogeneous condition consisting of the simultaneous inflammation and demyelination of the optic nerve (optic neuritis) and the spinal cord (myelitis). It can be monophasic or recurrent.",
        "symptoms": ["edema", "loss of vision", "weakness", "aphasia", "seizure", "insomnia", "diplopia", "headache", "muscle weakness", "sleep apnea", "blindness", "abscess", "asthenia", "inflammation", "nystagmus", "hypotension", "incontinence", "paralysis", "akathisia", "dysarthria", "hypoventilation", "sleep disorders", "depression", "cataplexy", "tremor", "ataxia", "fatigue", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Neuromyelitis_optica"
    },
    "Familial isolated vitamin E deficiency": {
        "summary": "Familial Isolated Vitamin E Deficiency also known as Ataxia With Vitamin E Deficiency is a rare autosomal recessive neurodegenerative disease. Symptoms are similar to those of Friedreich ataxia.",
        "symptoms": ["ataxia"],
        "url": "https://en.wikipedia.org/wiki/Familial_isolated_vitamin_E_deficiency"
    },
    "Gunther disease": {
        "summary": "Gunther disease, also known as congenital erythropoietic porphyria (CEP), uroporphyrinogen III synthase deficiency and UROS deficiency, is a congenital form of erythropoietic porphyria. The word porphyria originated from the Greek word porphura. Porphura actually means \u201cpurple pigment\u201d, which, in suggestion, the color that the body fluid changes when a person has Gunther\u2019s disease. It is a rare, autosomal recessive metabolic disorder affecting heme, caused by deficiency of the enzyme uroporphyrinogen cosynthetase. It is extremely rare, with a prevalence estimated at 1 in 1,000,000 or less. There have been times that prior to birth of a fetus, Gunther's disease has been shown to lead to anemia. In milder cases patients have not presented any symptoms until they have reached adulthood. In Gunther's disease, porphyrins are accumulated in the teeth and bones and an increased amount are seen in the plasma, bone marrow, feces, red blood cells, and urine.",
        "symptoms": ["blister", "vomiting", "swelling", "abdominal pain", "constipation"],
        "url": "https://en.wikipedia.org/wiki/Gunther_disease"
    },
    "Lymphangioleiomyomatosis": {
        "summary": "Lymphangioleiomyomatosis (LAM) is a disease. It is rare, progressive and systemic and typically results in cystic lung destruction. It predominantly affects women, especially during childbearing years.",
        "symptoms": ["dyspepsia", "edema", "aching", "mania", "dyspnea", "hemoptysis", "seizure", "swelling", "anxiety", "inflammation", "cuts", "shortness of breath", "headache", "vaginal discharge", "chest pain", "hypotension", "abrasion", "bleeding", "fatigue", "cough", "gas"],
        "url": "https://en.wikipedia.org/wiki/Lymphangioleiomyomatosis"
    },
    "Sneddon's syndrome": {
        "summary": "Sneddon's syndrome is a form of arteriopathy characterized by several symptoms, including:",
        "symptoms": ["aphasia", "rash", "headache", "skin rash", "edema"],
        "url": "https://en.wikipedia.org/wiki/Sneddon%27s_syndrome"
    },
    "Adducted thumb syndrome": {
        "summary": "Adducted thumb syndrome recessive form, also known as Christian syndrome or Craniostenosis arthrogryposis cleft palate, is a rare disease affecting multiple systems causing malformations of the palate, thumbs, and upper limbs. The name Christian syndrome derives from Joe. C. Christian, the first person to describe the condition. Inheritance is believed to be autosomal recessive, caused by mutation in the CHST14 (carbohydrate sulfotransferase 14) gene.",
        "symptoms": ["edema", "seizure", "bleeding", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Adducted_thumb_syndrome"
    },
    "CANDLE syndrome": {
        "summary": "Chronic Atypical Neutrophilic Dermatosis with Lipodystrophy and Elevated Temperature (CANDLE) syndrome is an autosomal recessive disorder that presents itself via various autoinflammatory responses throughout the body, multiple types of skin lesions, and recurrent long-term fever symptoms. The current known cause for the disorder is a mutation in the PSMB8 gene or mutations in other closely related genes. The syndrome was first named and classified in March 2010 after four patients were reviewed with similar symptoms. There have been approximately 30 cases ever reported in the scientific literature, as of 2015.",
        "symptoms": ["elevated temperature", "seizure", "ptosis", "skin lesion", "fever"],
        "url": "https://en.wikipedia.org/wiki/CANDLE_syndrome"
    },
    "Lafora disease": {
        "summary": "Lafora disease, also called Lafora progressive myoclonic epilepsy or MELF, is a fatal autosomal recessive genetic disorder characterized by the presence of inclusion bodies, known as Lafora bodies, within the cytoplasm of the cells of the heart, liver, muscle, and skin.:545 In a later study, Lafora disease has been and is now viewed as a neurodegenerative disease, since prior to the actual formation of Lafora bodies there has been seen to be an impairment in the development of cerebral cortical neurons. It was further concluded that Lafora disease is a complex neurodegenerative disease and also a glycogen metabolism disorder.",
        "symptoms": ["akathisia", "edema", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea", "gas"],
        "url": "https://en.wikipedia.org/wiki/Lafora_disease"
    },
    "Severe combined immunodeficiency": {
        "summary": "Severe combined immunodeficiency, SCID, also known as alymphocytosis, Glanzmann\u2013Riniker syndrome, severe mixed immunodeficiency syndrome, and thymic alymphoplasia, is a rare genetic disorder characterized by the disturbed development of functional T cells and B cells caused by numerous genetic mutations that result in heterogeneous clinical presentations. SCID involves defective antibody response due to either direct involvement with B lymphocytes or through improper B lymphocyte activation due to non-functional T-helper cells. Consequently, both \"arms\" (B cells and T cells) of the adaptive immune system are impaired due to a defect in one of several possible genes. SCID is the most severe form of primary immunodeficiencies, and there are now at least nine different known genes in which mutations lead to a form of SCID. It is also known as the bubble boy disease and bubble baby disease because its victims are extremely vulnerable to infectious diseases and some of them, such as David Vetter, have become famous for living in a sterile environment. SCID is the result of an immune system so highly compromised that it is considered almost absent.",
        "symptoms": ["ataxia", "edema"],
        "url": "https://en.wikipedia.org/wiki/Severe_combined_immunodeficiency"
    },
    "Jansen's metaphyseal chondrodysplasia": {
        "summary": "Jansen's metaphyseal chondrodysplasia or JMC is a disease that results from ligand-independent activation of the type 1 of the parathyroid hormone receptor (PTHR1), due to one of three reported mutations (activating mutation).",
        "symptoms": ["asthenia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Jansen%27s_metaphyseal_chondrodysplasia"
    },
    "HUPRA syndrome": {
        "summary": "HUPRA syndrome is a rare syndrome that was first described in 2010 in two infants of Palestinian origin from the same village in the Jerusalem area. One of the two infants' parents were related. It was later described in a third infant from the same village, whose parents were not related.",
        "symptoms": ["trauma", "infertility", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/HUPRA_syndrome"
    },
    "Barraquer\u2013Simons syndrome": {
        "summary": "Barraquer\u2013Simons syndrome (or acquired partial lipodystrophy, cephalothoracic lipodystrophy, and progressive lipodystrophy)) is a rare form of lipodystrophy, which usually first affects the head, and then spreads to the thorax.",
        "symptoms": ["ataxia", "cirrhosis", "trauma", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Barraquer%E2%80%93Simons_syndrome"
    },
    "Rotor syndrome": {
        "summary": "Rotor syndrome, also called Rotor type hyperbilirubinemia, is a rare, relatively benign autosomal recessive bilirubin disorder. It is a distinct, yet similar disorder to Dubin\u2013Johnson syndrome\u00a0\u2014 both diseases cause an increase in conjugated bilirubin.",
        "symptoms": ["itching", "yellow skin", "jaundice"],
        "url": "https://en.wikipedia.org/wiki/Rotor_syndrome"
    },
    "Congenital disorder of glycosylation type IIc": {
        "summary": "Congenital disorder of glycosylation type IIc or Leukocyte adhesion deficiency-2 (LAD2) is a type of leukocyte adhesion deficiency attributable to the absence of neutrophil sialyl-LewisX, a ligand of P- and E-selectin on vascular endothelium. It is associated with SLC35C1.",
        "symptoms": ["ataxia", "gas"],
        "url": "https://en.wikipedia.org/wiki/Congenital_disorder_of_glycosylation_type_IIc"
    },
    "Macrocephaly-capillary malformation": {
        "summary": "Macrocephaly-capillary malformation (M-CM) is a multiple malformation syndrome causing abnormal body and head overgrowth and cutaneous, vascular, neurologic, and limb abnormalities. Though not every patient has all features, commonly found signs include macrocephaly, congenital macrosomia, extensive cutaneous capillary malformation (naevus flammeus or port-wine stain type birthmark over much of the body; a capillary malformation of the upper lip or philtrum is seen in many patients with this condition), body asymmetry (also called hemihyperplasia or hemihypertrophy), polydactyly or syndactyly of the hands and feet, lax joints, doughy skin, variable developmental delay and other neurologic problems such as seizures and low muscle tone.",
        "symptoms": ["arrhythmia", "seizure"],
        "url": "https://en.wikipedia.org/wiki/Macrocephaly-capillary_malformation"
    },
    "Ectrodactyly": {
        "summary": "Ectrodactyly, split hand, cleft hand, derived from the Greek ektroma (abortion) and daktylos (finger) involves the deficiency or absence of one or more central digits of the hand or foot and is also known as split hand/split foot malformation (SHFM). The hands and feet of people with ectrodactyly are often described as \"claw-like\" and may include only the thumb and one finger (usually either the little finger, ring finger, or a syndactyly of the two) with similar abnormalities of the feet.",
        "symptoms": ["scoliosis", "rash", "depression", "deformity", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Ectrodactyly"
    },
    "Progressive multifocal leukoencephalopathy": {
        "summary": "Progressive multifocal leukoencephalopathy (PML) is a rare and usually fatal viral disease characterized by progressive damage (-pathy) or inflammation of the white matter (leuko-) of the brain (-encephalo-) at multiple locations (multifocal). It is caused by the JC virus, which is normally present and kept under control by the immune system. JC virus is harmless except in cases of weakened immune systems. In general, PML has a mortality rate of 30\u201350 percent in the first few months and those who survive can be left with varying degrees of neurological disabilities.",
        "symptoms": ["akathisia", "edema", "weakness", "insomnia", "abscess", "aphasia", "seizure", "inflammation", "hypoventilation", "sleep disorders", "headache", "hypotension", "cataplexy", "tremor", "ataxia", "sleep apnea", "gas"],
        "url": "https://en.wikipedia.org/wiki/Progressive_multifocal_leukoencephalopathy"
    },
    "Craniopagus parasiticus": {
        "summary": "Craniopagus parasiticus is an extremely rare type of parasitic twinning occurring in about 4 to 6 of 10,000,000 births. In craniopagus parasiticus, a parasitic twin head with an undeveloped body is attached to the head of a developed twin. Fewer than a dozen cases of this type of conjoined twin have been documented in the literature. Most infants with this condition are stillborn, or die shortly after birth.[citation needed]",
        "symptoms": ["bleeding"],
        "url": "https://en.wikipedia.org/wiki/Craniopagus_parasiticus"
    },
    "Epidermolysis bullosa simplex": {
        "summary": "Epidermolysis bullosa simplex (EBS) is a disorder resulting from mutations in the genes encoding keratin 5 or keratin 14.:598",
        "symptoms": ["boil", "edema", "mania", "abscess", "insect bite", "rash", "urticaria", "hyperpigmentation", "ataxia", "blister", "cirrhosis", "alopecia", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Epidermolysis_bullosa_simplex"
    },
    "Kikuchi disease": {
        "summary": "Kikuchi disease or Kikuchi-Fujimoto disease was described in 1972 in Japan. It is also known as histiocytic necrotizing lymphadenitis, Kikuchi necrotizing lymphadenitis, phagocytic necrotizing lymphadenitis, subacute necrotizing lymphadenitis, and necrotizing lymphadenitis.",
        "symptoms": ["abscess", "rash", "fever", "headache", "skin rash", "fatigue"],
        "url": "https://en.wikipedia.org/wiki/Kikuchi_disease"
    },
    "Hypertrichosis": {
        "summary": "Hypertrichosis (also called Ambras syndrome) is an abnormal amount of hair growth over the body; extensive cases of hypertrichosis have informally been called werewolf syndrome, because the appearance is similar to the mythical werewolf. The two distinct types of hypertrichosis are generalized hypertrichosis, which occurs over the entire body, and localized hypertrichosis, which is restricted to a certain area. Hypertrichosis can be either congenital (present at birth) or acquired later in life. The excess growth of hair occurs in areas of the skin with the exception of androgen-dependent hair of the pubic area, face, and axillary regions.",
        "symptoms": ["edema", "dental problem", "hair loss", "phobia", "mania", "deformity", "trauma", "inflammation", "irritation", "rash", "itching", "ptosis", "hirsutism", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Hypertrichosis"
    },
    "Idiopathic CD4+ lymphocytopenia": {
        "summary": "Idiopathic CD4+ lymphocytopenia (ICL) is a very rare medical syndrome in which the body has too few CD4+ T lymphocytes, which are a kind of white blood cell. ICL is sometimes characterized as \"HIV-negative AIDS\" by AIDS denialists, though in fact its clinical presentation differs from that seen with HIV/AIDS. People with ICL have a weakened immune system and are susceptible to opportunistic infections, although the rate of infections is lower than in people with AIDS.",
        "symptoms": ["ataxia", "ptosis", "gas", "edema"],
        "url": "https://en.wikipedia.org/wiki/Idiopathic_CD4%2B_lymphocytopenia"
    },
    "Pilotto syndrome": {
        "summary": "Pilotto syndrome is a rare syndrome which affects the face, heart, and back. The syndrome can cause a cleft lip and palate, scoliosis, and mental retardation. The Office of Rare Diseases and National Institutes of Health have classified this syndrome as affecting less than 200,000 people in the United States.",
        "symptoms": ["scoliosis"],
        "url": "https://en.wikipedia.org/wiki/Pilotto_syndrome"
    },
    "Alveolar capillary dysplasia": {
        "summary": "Alveolar capillary dysplasia (ACD, sometimes denoted ACDMPV when including misalignment of the pulmonary veins) is a type of diffuse developmental disorder of the lung. The other two diffuse developmental disorders are congenital acinar dysplasia and congenital alveolar dysplasia (CAD).",
        "symptoms": ["aching", "rash", "trauma", "edema"],
        "url": "https://en.wikipedia.org/wiki/Alveolar_capillary_dysplasia"
    },
    "FACES syndrome": {
        "summary": "FACES syndrome is a syndrome of unique facial features, anorexia, cachexia, eye and skin anomalies.",
        "symptoms": ["skin lesion", "cachexia"],
        "url": "https://en.wikipedia.org/wiki/FACES_syndrome"
    },
    "Zadik\u2013Barak\u2013Levin syndrome": {
        "summary": "Zadik\u2013Barak\u2013Levin syndrome (ZBLS) is a congenital disorder in humans. Presenting conditions include primary hypothyroidism, cleft palate, hypodontia, and ectodermal dysplasia. It is the result of an embryonic defect in the mesodermal-ectodermal midline development.",
        "symptoms": ["dry skin", "depressed"],
        "url": "https://en.wikipedia.org/wiki/Zadik%E2%80%93Barak%E2%80%93Levin_syndrome"
    },
    "WHIM syndrome": {
        "summary": "WHIM Syndrome (or Warts, Hypogammaglobulinemia, Immunodeficiency, and Myelokathexis syndrome) is a rare congenital immunodeficiency disorder characterized by chronic noncyclic neutropenia.",
        "symptoms": ["asthenia", "ataxia", "gas", "edema"],
        "url": "https://en.wikipedia.org/wiki/WHIM_syndrome"
    },
    "Metachondromatosis": {
        "summary": "Metachondromatosis is an autosomal dominantincompletely penetrant skeletal disorder affecting the growth of bones, leading to multiple enchondromas and osteochondromas. This tumor syndrome affects mainly tubular bones, though it can also involve the vertebrae, small joints, and flat bones.",
        "symptoms": ["myopathy"],
        "url": "https://en.wikipedia.org/wiki/Metachondromatosis"
    },
    "Alpha-mannosidosis": {
        "summary": "Alpha-mannosidosis is a lysosomal storage disorder caused by deficient activity of the enzyme alpha-D-mannosidase. In humans it is known to be caused by an autosomal recessive genetic mutation. In livestock it is caused by chronic poisoning with swainsonine from locoweed.",
        "symptoms": ["seizure", "weakness", "hearing loss"],
        "url": "https://en.wikipedia.org/wiki/Alpha-mannosidosis"
    },
    "Chromosome 5q deletion syndrome": {
        "summary": "Chromosome 5q deletion syndrome (chromosome 5q monosomy, 5q- syndrome) is an acquired, hematological disorder characterized by loss of part of the long arm (q arm, band 5q33.1) of human chromosome 5 in bone marrow myelocyte cells. This chromosome abnormality is most commonly associated with the myelodysplastic syndrome.",
        "symptoms": ["urticaria"],
        "url": "https://en.wikipedia.org/wiki/Chromosome_5q_deletion_syndrome"
    },
    "Hypophosphatasia": {
        "summary": "Hypophosphatasia (also called deficiency of alkaline phosphatase or phosphoethanolaminuria) is a rare, and sometimes fatal, metabolic bone disease. Clinical symptoms are heterogeneous, ranging from the rapidly fatal, perinatal variant, with profound skeletal hypomineralization and respiratory compromise, to a milder, progressive osteomalacia later in life. Tissue non-specific alkaline phosphatase (TNSALP) deficiency in osteoblasts and chondrocytes impairs bone mineralization, leading to rickets or osteomalacia. The pathognomonic finding is subnormal serum activity of the TNSALP enzyme, which is caused by one of 200 genetic mutations identified to date, in the gene encoding TNSALP. Genetic inheritance is autosomal recessive for the perinatal and infantile forms but either autosomal recessive or autosomal dominant in the milder forms. The prevalence of hypophosphatasia is not known; one study estimated the live birth incidence of severe forms to be 1:100,000.",
        "symptoms": ["dental problem", "weakness", "seizure", "intracranial pressure", "vomiting", "muscle weakness", "weight gain", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Hypophosphatasia"
    },
    "Guanidinoacetate methyltransferase deficiency": {
        "summary": "Guanidinoacetate methyltransferase deficiency, also called GAMT deficiency, is an autosomal recessive metabolic disorder that primarily affects the nervous system and muscles. It is the first observed disorder of creatine metabolism.",
        "symptoms": ["tremor", "seizure", "muscle weakness", "weakness", "tremors"],
        "url": "https://en.wikipedia.org/wiki/Guanidinoacetate_methyltransferase_deficiency"
    },
    "Multiple system atrophy": {
        "summary": "Multiple system atrophy (MSA) is a degenerative neurological disorder that depicts a group of disorders characterised by the neuronal degeneration mainly in the substantia nigra, striatum, autonomic nervous system and cerebellum. Following a report in 1964 of what was then called striatonigral degeneration, many patients were recognised in whom the changes of striatonigral and olivopontocerebellar degeneration were combined and who had symptoms and signs of cerebellar ataxia and parkinsonian manifestations. More than half of the patients with striatonigral degeneration have orthostatic hypotension, which proves at autopsy to be associated with loss of intermediolateral horn cells (origin of the presynaptic cholinergic sympathetic neurones) and of pigmented nuclei of the brainstem.",
        "symptoms": ["dry mouth", "impotence", "speech problem", "double vision", "paralysis", "dysarthria", "constipation", "dehydration", "sleep disorders", "dizziness", "low blood pressure", "snoring", "urinary incontinence", "hypotension", "incontinence", "tachycardia", "tremor", "ataxia", "sleep apnea", "sweating", "dysphagia"],
        "url": "https://en.wikipedia.org/wiki/Multiple_system_atrophy"
    },
    "Pashayan syndrome": {
        "summary": "Pashayan syndrome also known as Pashayan\u2013Prozansky Syndrome, and blepharo-naso-facial syndrome is a rare syndrome. Facial abnormalities characterise this syndrome as well as malformation of extremities. Specific characteristics would be a bulky, flattened nose, where the face has a mask like appearance and the ears are also malformed.",
        "symptoms": ["gas"],
        "url": "https://en.wikipedia.org/wiki/Pashayan_syndrome"
    },
    "Fibrochondrogenesis": {
        "summary": "Fibrochondrogenesis is a rare autosomal recessive form of osteochondrodysplasia, causing abnormal fibrous development of cartilage and related tissues.",
        "symptoms": ["skeletal malformations", "deformity", "gas", "skeletal malformation"],
        "url": "https://en.wikipedia.org/wiki/Fibrochondrogenesis"
    },
    "Congenital chloride diarrhea": {
        "summary": "Congenital chloride diarrhea (CCD, also congenital chloridorrhea or Darrow Gamble syndrome) is a genetic disorder due to an autosomal recessive mutation on chromosome 7. The mutation is in downregulated-in-adenoma (DRA), a gene that encodes a membrane protein of intestinal cells. The protein belongs to the solute carrier 26 family of membrane transport proteins. More than 20 mutations in the gene are known to date. A rare disease, CCD occurs in all parts of the world but is more common in some populations with genetic founder effects, most notably in Finland.",
        "symptoms": ["dehydration", "abdominal distension", "gas"],
        "url": "https://en.wikipedia.org/wiki/Congenital_chloride_diarrhea"
    },
    "Wilson Therapeutics": {
        "summary": "Wilson Therapeutics is a biopharmaceutical company, based in Stockholm, Sweden, that develops novel therapies for rare diseases. The company is listed in the Mid Cap segment on Nasdaq Stockholm with the stock ticker WTX.",
        "symptoms": ["cirrhosis"],
        "url": "https://en.wikipedia.org/wiki/Wilson_Therapeutics"
    },
    "Hallermann\u2013Streiff syndrome": {
        "summary": "Hallermann\u2013Streiff syndrome (also known as oculomandibulofacial syndrome, Fran\u00e7ois dyscephalic syndrome, Hallermann\u2013Streiff\u2013Fran\u00e7ois syndrome, oculomandibulodyscephaly with hypotrichosis, Aubry syndrome, and Ullrich-Fremery-Dohna syndrome) is a congenital disorder that affects growth, cranial development, hair growth and dental development.",
        "symptoms": ["deformity", "deafness", "seizure", "scoliosis", "hyperthermia", "ataxia", "sleep apnea", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Hallermann%E2%80%93Streiff_syndrome"
    },
    "Clostridium sordellii": {
        "summary": "Clostridium sordellii is a rare anaerobic, gram-positive, spore-forming rod with peritrichous flagella that is capable of causing pneumonia, endocarditis, arthritis, peritonitis, and myonecrosis. C. sordellii bacteremia and sepsis occur rarely. Most cases of sepsis from C. sordellii occur in patients with underlying conditions. Severe toxic shock syndrome among previously healthy persons has been described in a small number of C. sordellii cases, most often associated with gynecologic infections in women and infection of the umbilical stump in newborns. It has also been described in post-partum females, medically induced abortions, injection drug users and trauma cases. So far, all documented post-partum females who contracted C. sordellii septicaemia have died, and all but one woman who contracted the bacterium post-abortion have died[citation needed].",
        "symptoms": ["tachycardia", "trauma", "hypotension", "pyrexia"],
        "url": "https://en.wikipedia.org/wiki/Clostridium_sordellii"
    },
    "Diabetes insipidus": {
        "summary": "Diabetes insipidus (DI) is a condition characterized by excessive thirst and excretion of large amounts of severely dilute urine, with reduction of fluid intake having no effect on the concentration of the urine.",
        "symptoms": ["edema", "excessive thirst", "drug abuse", "trauma", "blindness", "polyuria", "high blood sugar", "dehydration", "fever", "vomiting", "urinary incontinence", "blurred vision", "incontinence", "ptosis", "weight gain", "gas", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Diabetes_insipidus"
    },
    "Monilethrix": {
        "summary": "Monilethrix (also referred to as beaded hair) is a rare autosomal dominant hair disease that results in short, fragile, broken hair that appears beaded. It comes from the Latin word for necklace (monile) and the Greek word for hair (thrix).",
        "symptoms": ["ataxia", "cirrhosis", "hair loss", "alopecia", "myopathy"],
        "url": "https://en.wikipedia.org/wiki/Monilethrix"
    },
    "Synovial osteochondromatosis": {
        "summary": "Synovial osteochondromatosis (SOC) (synonyms include synovial chondromatosis, primary synovial chondromatosis, synovial chondrometaplasia) is a rare disease that creates a benign change or proliferation in the synovium or joint-lining tissue, which changes to form bone-forming cartilage. In most occurrences, there is only one joint affected, either the knee, the hip, or the elbow. Rarely involves the TMJ.",
        "symptoms": ["irritation", "aching", "swelling", "joint stiffness", "trauma"],
        "url": "https://en.wikipedia.org/wiki/Synovial_osteochondromatosis"
    },
    "Sandhoff disease": {
        "summary": "Sandhoff disease, also known as Sandhoff-Jatzkewitz disease, variant 0 of GM2-Gangliosidosis or Hexosaminidase A and B deficiency, is a lysosomal genetic, lipid storage disorder caused by the inherited deficiency to create functional beta-hexosaminidases A and B. These catabolic enzymes are needed to degrade the neuronal membrane components, ganglioside GM2, its derivative GA2, the glycolipid globoside in visceral tissues, and some oligosaccharides. Accumulation of these metabolites leads to a progressive destruction of the central nervous system and eventually to death. The rare autosomal recessive neurodegenerative disorder is clinically almost indistinguishable from Tay-Sachs disease, another genetic disorder that disrupts beta-hexosaminidases A and S. There are three subsets of Sandhoff disease based on when first symptoms appear: classic infantile, juvenile and adult late onset.",
        "symptoms": ["muscle weakness", "blindness", "weakness", "speech problem", "deafness", "seizure", "hearing loss", "impaired vision", "ataxia", "cough", "paralysis"],
        "url": "https://en.wikipedia.org/wiki/Sandhoff_disease"
    },
    "Carnitine palmitoyltransferase I deficiency": {
        "summary": "Carnitine palmitoyltransferase I deficiency is a rare metabolic disorder that prevents the body from converting certain fats called long-chain fatty acids into energy, particularly during periods without food.",
        "symptoms": ["low blood sugar", "muscle weakness", "weakness"],
        "url": "https://en.wikipedia.org/wiki/Carnitine_palmitoyltransferase_I_deficiency"
    },
    "Hereditary sensory and autonomic neuropathy type I": {
        "summary": "32501 35043",
        "symptoms": ["weakness", "deformity", "deafness", "paralysis", "inflammation", "hearing loss", "sweating", "muscle weakness", "cough", "gas", "blister"],
        "url": "https://en.wikipedia.org/wiki/Hereditary_sensory_and_autonomic_neuropathy_type_I"
    },
    "Abdominal epilepsy": {
        "summary": "Abdominal epilepsy, also known as autonomic epilepsy, is a rare condition most frequently found in children, consisting of gastrointestinal (GI) disturbances caused by epileptiform seizure activity.",
        "symptoms": ["confusion", "seizure", "lethargy", "vomiting", "abdominal pain", "gas"],
        "url": "https://en.wikipedia.org/wiki/Abdominal_epilepsy"
    },
    "Dipygus": {
        "summary": "The dipygus deformity is a severe congenital deformity where the body axis forks left and right partway along the torso with the posterior end (pelvis and legs) duplicated. Myrtle Corbin was a dipygus; she married and had 5 children. In human cases the inner two of the four hindquarters develop much smaller than normal. This is a type of \"teras catadidymum\" (\"monster twinned below\").",
        "symptoms": ["deformity"],
        "url": "https://en.wikipedia.org/wiki/Dipygus"
    },
    "Werner syndrome": {
        "summary": "Werner syndrome (WS), also known as \"adult progeria\", is a rare, autosomal recessive progeroid syndrome (PS), which is characterized by the appearance of premature aging.",
        "symptoms": ["aching", "hair loss", "skin ulcers", "ataxia", "ptosis", "alopecia"],
        "url": "https://en.wikipedia.org/wiki/Werner_syndrome"
    },
    "Lipoprotein lipase deficiency": {
        "summary": "Lipoprotein lipase deficiency (also known as \"familial chylomicronemia syndrome\", \"chylomicronemia\", \"chylomicronemia syndrome\" and \"hyperlipoproteinemia type Ia\") is a rare autosomal recessive lipid disorder caused by a mutation in the gene which codes lipoprotein lipase.:533 As a result, afflicted individuals lack the ability to produce lipoprotein lipase enzymes necessary for effective breakdown of fatty acids.",
        "symptoms": ["abdominal pain", "gas"],
        "url": "https://en.wikipedia.org/wiki/Lipoprotein_lipase_deficiency"
    },
    "Prolidase deficiency": {
        "summary": "Prolidase deficiency (PD) is an extremely uncommon autosomal recessive disorder associated with collagen metabolism that affects connective tissues and thus a diverse array of organ systems more broadly, though it is extremely inconsistent in its expression.",
        "symptoms": [
            "rash",
            "ptosis",
            "skin lesion",
            "inflammation"
        ],
        "url": "https://en.wikipedia.org/wiki/Prolidase_deficiency"
    },
    "Stiff person syndrome": {
        "summary": "Stiff person syndrome (SPS), also known as stiff man syndrome (SMS), is a rare neurologic disorder of unclear etiology characterized by progressive rigidity and stiffness. The stiffness primarily affects the truncal muscles and is superimposed by spasms, resulting in postural deformities. Chronic pain, impaired mobility, and lumbar hyperlordosis are common symptoms.",
        "symptoms": [
            "edema",
            "phobia",
            "aphasia",
            "seizure",
            "anxiety",
            "agoraphobia",
            "insomnia",
            "vertigo",
            "headache",
            "sleep apnea",
            "abscess",
            "pyrexia",
            "inflammation",
            "tachycardia",
            "hypotension",
            "akathisia",
            "chronic pain",
            "hypoventilation",
            "sleep disorders",
            "depression",
            "cataplexy",
            "tremor",
            "ataxia"
        ],
        "url": "https://en.wikipedia.org/wiki/Stiff_person_syndrome"
    },
    "Neurotrophic keratitis": {
        "summary": "Neurotrophic keratitis (NK) is a degenerative disease of the cornea caused by damage of the trigeminal nerve, which results in impairment of corneal sensitivity, spontaneous corneal epithelium breakdown, poor corneal healing and development of corneal ulceration, melting and perforation.",
        "symptoms": [
            "edema",
            "inflammation",
            "trauma"
        ],
        "url": "https://en.wikipedia.org/wiki/Neurotrophic_keratitis"
    },
    "Trichodysplasia spinulosa": {
        "summary": "Trichodysplasia spinulosa (also known by many other names, including viral-associated trichodysplasia spinulosa, viral-associated trichodysplasia, pilomatrix dysplasia and ciclosporin-induced folliculodystrophy, although the last is a misnomer) is a rare cutaneous condition that has been described almost exclusively in immunocompromised patients, usually organ transplant recipients, on regimens of immunosuppressive drugs. As of early 2016, a total of 32 cases had been reported in the medical literature. Despite its rarity, TS is believed to be underdiagnosed, and the growing population of patients on immunosuppressive drug regimens suggests its incidence may rise. TS has been described as an emerging infectious disease.",
        "symptoms": [
            "itching",
            "gas",
            "alopecia"
        ],
        "url": "https://en.wikipedia.org/wiki/Trichodysplasia_spinulosa"
    },
    "Newborn screening": {
        "summary": "Newborn screening is a public health program of screening in infants shortly after birth for a list of conditions that are treatable, but not clinically evident in the newborn period. Some of the conditions included in newborn screening programs are only detectable after irreversible damage has been done, in some cases sudden death is the first manifestation of a disease. Screening programs are often run by state or national governing bodies with the goal of screening all infants born in the jurisdiction. The number of diseases screened for is set by each jurisdiction, and can vary greatly. Most newborn screening tests are done by measuring metabolites and enzyme activity in whole blood samples collected on specialized filter paper, however many areas are starting to screen infants for hearing loss using automated auditory brainstem response and congenital heart defects using pulse oximetry. Infants who screen positive undergo further testing to determine if they are truly affected with a disease or if the test result was a false positive. Follow-up testing is typically coordinated between geneticists and the infant's pediatrician or primary care physician.",
        "symptoms": [
            "deafness",
            "hearing loss"
        ],
        "url": "https://en.wikipedia.org/wiki/Newborn_screening"
    },
    "Myelokathexis": {
        "summary": "Myelokathexis is a congenital disorder of the white blood cells that causes severe, chronic leukopenia (a reduction of circulating white blood cells) and neutropenia (a reduction of neutrophil granulocytes). The disorder is believed to be inherited in an autosomal dominant manner. Myelokathexis refers to retention (kathexis) of neutrophils in the bone marrow (myelo).",
        "symptoms": [
            "ptosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Myelokathexis"
    },
    "Galactocele": {
        "summary": "A galactocele (also: lacteal cyst or milk cyst) is a retention cyst containing milk or a milky substance that is usually located in the mammary glands. They occur in women during or shortly after lacation.",
        "symptoms": [
            "abscess",
            "ptosis",
            "nipple discharge"
        ],
        "url": "https://en.wikipedia.org/wiki/Galactocele"
    },
    "Carnosinemia": {
        "summary": "Carnosinemia, also called carnosinase deficiency or aminoacyl-histidine dipeptidase deficiency, is a rare autosomal recessive metabolic disorder caused by a deficiency of carnosinase, a dipeptidase (a type of enzyme that splits dipeptides into their two amino acid constituents).",
        "symptoms": [
            "tremor",
            "seizure",
            "rash",
            "tremors"
        ],
        "url": "https://en.wikipedia.org/wiki/Carnosinemia"
    },
    "Catamenial pneumothorax": {
        "summary": "Catamenial pneumothorax is a condition of air leaking into the pleural space (pneumothorax) occurring in conjunction with menstrual periods (catamenial refers to menstruation), believed to be caused primarily by endometriosis of the pleura (the membrane surrounding the lung).",
        "symptoms": [
            "edema",
            "trauma",
            "abscess",
            "hemoptysis",
            "fever",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Catamenial_pneumothorax"
    },
    "Gillespie syndrome": {
        "summary": "Gillespie syndrome, also called aniridia, cerebellar ataxia and mental deficiency. is a rare genetic disorder. The disorder is characterized by partial aniridia (meaning that part of the iris is missing), ataxia (motor and coordination problems), and, in most cases, intellectual disability. It is heterogeneous, inherited in either an autosomal dominant or autosomal recessive manner. Gillespie syndrome was first described by American ophthalmologist Fredrick Gillespie in 1965.",
        "symptoms": [
            "edema",
            "ataxia",
            "ptosis",
            "nystagmus",
            "rash"
        ],
        "url": "https://en.wikipedia.org/wiki/Gillespie_syndrome"
    },
    "Liddle's syndrome": {
        "summary": "Liddle's syndrome, also called Liddle syndrome and pseudohyperaldosteronism, is a genetic disorder inherited in an autosomal dominant manner that is characterized by early, and frequently severe, high blood pressure associated with low plasma renin activity, metabolic alkalosis, low blood potassium, and normal to low levels of aldosterone. Liddle syndrome involves abnormal kidney function, with excess reabsorption of sodium and loss of potassium from the renal tubule, and is treated with a combination of low sodium diet and potassium-sparing diuretic drugs (e.g., amiloride). It is extremely rare, with fewer than 30 pedigrees or isolated cases having been reported worldwide as of 2008.",
        "symptoms": [
            "edema",
            "weakness",
            "palpitation",
            "deafness",
            "seizure",
            "high blood pressure",
            "paralysis",
            "constipation",
            "shortness of breath",
            "urinary incontinence",
            "hyperthermia",
            "incontinence",
            "ataxia",
            "ptosis",
            "fatigue",
            "gas",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Liddle%27s_syndrome"
    },
    "Dysferlinopathy": {
        "summary": "Dysferlinopathy is an autosomal recessive neuromuscular disorder caused by a deficiency of functional dysferlin protein due to mutations in the dysferlin gene. Dysferlinopathy is characterized by progressive muscle wasting and is most often clinically diagnosed as Limb-girdle muscular dystrophy type 2B (LGMD2B) or Miyoshi muscular dystrophy 1 (MMD1; a type of distal muscular dystrophy), depending on the initial pattern of muscle involvement at diagnosis. Dysferlinopathy is a rare disease, the exact incidence of which has not yet been determined.",
        "symptoms": [
            "weakness",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Dysferlinopathy"
    },
    "Senior\u2013L\u00f8ken syndrome": {
        "summary": "Senior\u2013L\u00f8ken syndrome is a congenital eye disorder, first characterized in 1961. It is a rare, ciliopathic, autosomal recessive disorder characterized by nephronophthisis and progressive eye disease.",
        "symptoms": [
            "blindness"
        ],
        "url": "https://en.wikipedia.org/wiki/Senior%E2%80%93L%C3%B8ken_syndrome"
    },
    "Smith\u2013Lemli\u2013Opitz syndrome": {
        "summary": "Smith\u2013Lemli\u2013Opitz syndrome (also SLOS, or 7-dehydrocholesterol reductase deficiency) is an inborn error of cholesterol synthesis. It is an autosomal recessive, multiple malformation syndrome caused by a mutation in the enzyme 7-Dehydrocholesterol reductase, or DHCR7. It causes a broad spectrum of effects, ranging from mild intellectual disability and behavioural problems to lethal malformations.",
        "symptoms": [
            "aching",
            "edema",
            "hyperactivity",
            "anxiety",
            "irritability",
            "ptosis",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Smith%E2%80%93Lemli%E2%80%93Opitz_syndrome"
    },
    "Sabinas brittle hair syndrome": {
        "summary": "Sabinas brittle hair syndrome, also called Sabinas syndrome or brittle hair-mental deficit syndrome, is an autosomal recessive congenital disorder affecting the integumentary system.",
        "symptoms": [
            "trauma"
        ],
        "url": "https://en.wikipedia.org/wiki/Sabinas_brittle_hair_syndrome"
    },
    "Schindler disease": {
        "summary": "Schindler disease, also known as Kanzaki disease and alpha-N-acetylgalactosaminidase deficiency is a rare disease found in humans. This lysosomal storage disorder is caused by a deficiency in the enzyme alpha-NAGA (alpha-N-acetylgalactosaminidase), attributable to mutations in the NAGA gene on chromosome 22, which leads to excessive lysosomal accumulation of glycoproteins. A deficiency of the alpha-NAGA enzyme leads to an accumulation of glycosphingolipids throughout the body. This accumulation of sugars gives rise to the clinical features associated with this disorder. Schindler disease is an autosomal recessive disorder, meaning that one must inherit an abnormal allele from both parents in order to have the disease.",
        "symptoms": [
            "seizure",
            "weakness"
        ],
        "url": "https://en.wikipedia.org/wiki/Schindler_disease"
    },
    "Hemifacial hypertrophy": {
        "summary": "Hemifacial hypertrophy (also termed facial hemihypertrophy, facial hemihyperplasia, or Friedreich's disease) abbreviated as (HFH) is rare congenital disease characterized by unilateral enlargement of the head and teeth. It is classified as true HFH (THFH) with unilateral enlargement of the viscerocranium, and partial HFH (PHFH) in which not all structures are enlarged. Hemifacial hypertrophy can cause a wide spectrum of defects or may involve only muscle or bone. it is usually treated surgically. It is believed to be a minor form of hemihypertrophy.",
        "symptoms": [
            "edema",
            "trauma",
            "abscess",
            "laceration",
            "abrasion",
            "ptosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Hemifacial_hypertrophy"
    },
    "Tolosa\u2013Hunt syndrome": {
        "summary": "Tolosa\u2013Hunt syndrome (THS) is a rare disorder characterized by severe and unilateral headaches with orbital pain, along with weakness and paralysis (ophthalmoplegia) of certain eye muscles (extraocular palsies).",
        "symptoms": [
            "vertigo",
            "weakness",
            "double vision",
            "inflammation",
            "fever",
            "headache",
            "exophthalmos",
            "ptosis",
            "fatigue",
            "paralysis"
        ],
        "url": "https://en.wikipedia.org/wiki/Tolosa%E2%80%93Hunt_syndrome"
    },
    "Zori\u2013Stalker\u2013Williams syndrome": {
        "summary": "Zori\u2013Stalker\u2013Williams syndrome, also known as pectus excavatum, macrocephaly, short stature and dysplastic nails, is a rare autosomal dominant congenital disorder associated with a range of features such as pectus excavatum, macrocephaly and dysplastic nails, familial short stature, developmental delay and distinctive facies. Further signs are known to be associated with this syndrome.",
        "symptoms": [
            "edema",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Zori%E2%80%93Stalker%E2%80%93Williams_syndrome"
    },
    "POEMS syndrome": {
        "summary": "POEMS syndrome (also known as Crow\u2013Fukase syndrome, Takatsuki disease, or PEP syndrome) is a rare medical syndrome. It is defined as the combination of a plasma-cell proliferative disorder (typically myeloma), polyneuropathy, and effects on many other organ systems. It begins in middle age \u2013 the average age at onset is 50 \u2013 and affects up to twice as many men as women.",
        "symptoms": [
            "anasarca",
            "edema",
            "weakness",
            "tingling",
            "numbness",
            "fever",
            "shortness of breath",
            "sweating",
            "hyperpigmentation",
            "gas",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/POEMS_syndrome"
    },
    "Wiedemann\u2013Rautenstrauch syndrome": {
        "summary": "Wiedemann\u2013Rautenstrauch (WR) syndrome [\u02c8vi\u02d0d\u0259man \u02c8\u0281a\u035c\u028at\u0259n.\u0283t\u0281a\u035c\u028ax], also known as neonatal progeroid syndrome, is an autosomal recessive progeroid syndrome.",
        "symptoms": [
            "ataxia",
            "edema"
        ],
        "url": "https://en.wikipedia.org/wiki/Wiedemann%E2%80%93Rautenstrauch_syndrome"
    },
    "Pseudomyxoma peritonei": {
        "summary": "Pseudomyxoma peritonei (PMP) is a clinical condition caused by cancerous cells (mucinous adenocarcinoma) that produce abundant mucin or gelatinous ascites. The tumors cause fibrosis of tissues and impede digestion or organ function, and if left untreated, the tumors and mucin they produce will fill the abdominal cavity. This will result in compression of organs and will destroy the function of colon, small intestine, stomach, or other organs. Prognosis with treatment in many cases is optimistic, but the disease is lethal if untreated, with death by cachexia, bowel obstruction, or other types of complications.",
        "symptoms": [
            "infertility",
            "bloating",
            "gas",
            "cachexia"
        ],
        "url": "https://en.wikipedia.org/wiki/Pseudomyxoma_peritonei"
    },
    "Zamzam\u2013Sheriff\u2013Phillips syndrome": {
        "summary": "Zamzam\u2013Sheriff\u2013Phillips syndrome is a rare autosomal recessive congenital disorder. It is characterized by aniridia, ectopia lentis, abnormal upper incisors and intellectual disability. Not a lot of research has been undertaken of this particular disease so thus far there is no known gene that affects this condition. However it has been hypothesised that the symptoms described are found at a particular gene, though intellectual disability is believed to be due to a different genetic cause.",
        "symptoms": [
            "ptosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Zamzam%E2%80%93Sheriff%E2%80%93Phillips_syndrome"
    },
    "Reynolds syndrome": {
        "summary": "Reynolds syndrome is a rare secondary laminopathy, consisting of the combination of primary biliary cirrhosis and progressive systemic sclerosis. In some patients this syndrome has also been associated with Sj\u00f6gren's syndrome and hemolytic anemia. Typical clinical features include jaundice, elevated blood levels of alkaline phosphatase, calcinosis cutis, telangiectasias, and pruritus. This disease may cause white or yellow-ish spots on the arms or legs. The syndrome, a special case of scleroderma, is named after the American physician, Telfer B. Reynolds, MD (1921\u20132004), who first described it. He is also known for creating one of the world's first hepatology programs at the University of Southern California.",
        "symptoms": [
            "cirrhosis",
            "jaundice"
        ],
        "url": "https://en.wikipedia.org/wiki/Reynolds_syndrome"
    },
    "Fucosidosis": {
        "summary": "Fucosidosis is a rare lysosomal storage disorder in which the FUCA1 gene experiences mutations that severely reduce or stop the activity of the alpha-L-fucosidase enzyme. The result is a buildup of complex sugars in parts of the body, which leads to death. Fucosidosis is one of nine identified glycoprotein storage diseases. The gene encoding the alpha-fucosidase, FUCA 1, was found to be located to the short arm of chromosome 1p36 - p34, by Carrit and co-workers, in 1982.",
        "symptoms": [
            "seizure",
            "loss of balance",
            "blindness",
            "deafness",
            "weight loss"
        ],
        "url": "https://en.wikipedia.org/wiki/Fucosidosis"
    },
    "Progressive vaccinia": {
        "summary": "Progressive vaccinia (also known as \"Vaccinia gangrenosum,\" and \"Vaccinia necrosum\") is a rare cutaneous condition caused by the vaccinia virus, characterized by painless, but progressive, necrosis and ulceration.:392",
        "symptoms": [
            "fever",
            "skin lesion"
        ],
        "url": "https://en.wikipedia.org/wiki/Progressive_vaccinia"
    },
    "Fragile X syndrome": {
        "summary": "Fragile X syndrome (FXS) is a genetic disorder. Symptoms often include mild to moderate intellectual disability. Physical features may include a long and narrow face, large ears, flexible fingers, and large testicles. About a third of people have features of autism such as problems with social interactions and delayed speech. Hyperactivity is common and seizures occur in about 10%. Males are usually more affected than females.",
        "symptoms": [
            "aching",
            "phobia",
            "hyperactivity",
            "blindness",
            "seizure",
            "loss of coordination",
            "aggression",
            "anxiety",
            "learning difficulties",
            "panic attack",
            "depression",
            "tremor",
            "ataxia",
            "irritability",
            "weight gain",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Fragile_X_syndrome"
    },
    "Achromatopsia": {
        "summary": "Achromatopsia (ACHM), also known as total color blindness, is a medical syndrome that exhibits symptoms relating to at least five conditions. The term may refer to acquired conditions such as cerebral achromatopsia, also known as color agnosia, but it typically refers to an autosomal recessive congenital color vision condition, the inability to perceive color and to achieve satisfactory visual acuity at high light levels (typically exterior daylight). The syndrome is also present in an incomplete form which is more properly defined as dyschromatopsia. It is estimated to affect 1 in 40,000 live births worldwide.",
        "symptoms": [
            "red eye",
            "diplopia",
            "edema",
            "phobia",
            "blindness",
            "trauma",
            "inflammation",
            "nystagmus",
            "exophthalmos",
            "ptosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Achromatopsia"
    },
    "M\u00f6bius syndrome": {
        "summary": "M\u00f6bius syndrome (also spelled Moebius) is an extremely rare congenital neurological disorder which is characterized by facial paralysis and the inability to move the eyes from side to side. Most people with M\u00f6bius syndrome are born with complete facial paralysis and cannot close their eyes or form facial expressions. Limb and chest wall abnormalities sometimes occur with the syndrome. People with M\u00f6bius syndrome have normal intelligence, although their lack of facial expression is sometimes incorrectly taken to be due to dullness or unfriendliness. It is named for Paul Julius M\u00f6bius, a neurologist who first described the syndrome in 1888.",
        "symptoms": [
            "edema",
            "dry mouth",
            "trauma",
            "unhappy",
            "hearing loss",
            "drooling",
            "gas",
            "paralysis"
        ],
        "url": "https://en.wikipedia.org/wiki/M%C3%B6bius_syndrome"
    },
    "Parry\u2013Romberg syndrome": {
        "summary": "Parry\u2013Romberg syndrome (also known as progressive hemifacial atrophy) is a rare disease characterized by progressive shrinkage and degeneration of the tissues beneath the skin, usually on only one side of the face (hemifacial atrophy) but occasionally extending to other parts of the body. An autoimmune mechanism is suspected, and the syndrome may be a variant of localized scleroderma, but the precise etiology and pathogenesis of this acquired disorder remains unknown. It has been reported in the literature as a possible consequence of sympathectomy. The syndrome has a higher prevalence in females and typically appears between 5\u00a0\u2013 15 years of age.",
        "symptoms": [
            "edema",
            "trauma",
            "deformity",
            "abscess",
            "nausea",
            "seizure",
            "paralysis",
            "depressed",
            "vomiting",
            "headache",
            "laceration",
            "abrasion",
            "ptosis",
            "sweating"
        ],
        "url": "https://en.wikipedia.org/wiki/Parry%E2%80%93Romberg_syndrome"
    },
    "Lymphangiomatosis": {
        "summary": "In medical terminology lymphangiomatosis means: lymphatic system (lymph) vessel (angi) tumor or cyst (oma) condition (tosis). Lymphatic vessels reach every part of the body except the central nervous system (the brain and spinal cord), which has its own specialized system. The lymphatic system has three main functions:",
        "symptoms": [
            "edema",
            "dyspnea",
            "nausea",
            "anxiety",
            "fever",
            "abdominal distension",
            "abdominal pain",
            "liver failure",
            "cough",
            "tingling",
            "numbness",
            "dizziness",
            "chest pain",
            "flank pain",
            "gas",
            "confusion",
            "vomiting",
            "wheezing",
            "paralysis",
            "weight loss",
            "shortness of breath",
            "fatigue"
        ],
        "url": "https://en.wikipedia.org/wiki/Lymphangiomatosis"
    },
    "Sanfilippo syndrome": {
        "summary": "Sanfilippo syndrome, or mucopolysaccharidosis III (MPS-III) is a rare autosomal recessive lysosomal storage disease. It is caused by a deficiency in one of the enzymes needed to break down the glycosaminoglycan heparan sulfate (which is found in the extra-cellular matrix and on cell surface glycoproteins).",
        "symptoms": [
            "behavioral disturbances",
            "seizure",
            "hyperactivity"
        ],
        "url": "https://en.wikipedia.org/wiki/Sanfilippo_syndrome"
    },
    "Ring chromosome 20 syndrome": {
        "summary": "Ring chromosome 20, ring-shaped chromosome 20 or r(20) syndrome is a rare human chromosome abnormality where the two arms of chromosome 20 fuse to form a ring chromosome. The syndrome is associated with epileptic seizures, behaviour disorders and mental retardation.",
        "symptoms": [
            "learning difficulties",
            "convulsions",
            "confusion",
            "gas",
            "seizure"
        ],
        "url": "https://en.wikipedia.org/wiki/Ring_chromosome_20_syndrome"
    },
    "Tracheobronchomalacia": {
        "summary": "Tracheobronchomalacia or TBM is a condition characterized by flaccidity of the tracheal support cartilage which leads to tracheal collapse. This condition can also affect the bronchi. There are two forms of this rare condition: primary TB and secondary TB. Primary TB is congenital and starts as early as two years old. It is mainly linked to genetic causes. Secondary TB is acquired and starts in adulthood. It is mainly developed after an accident or chronic inflammation.",
        "symptoms": [
            "trauma",
            "inflammation",
            "wheezing",
            "shortness of breath",
            "cough",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Tracheobronchomalacia"
    },
    "Fahr's syndrome": {
        "summary": "Idiopathic basal ganglia calcification, also known as Fahr disease, is a rare, genetically dominant, inherited neurological disorder characterized by abnormal deposits of calcium in areas of the brain that control movement. Through the use of CT scans, calcifications are seen primarily in the basal ganglia and in other areas such as the cerebral cortex.",
        "symptoms": [
            "trauma",
            "seizure",
            "headache",
            "muscle cramp",
            "slurred speech"
        ],
        "url": "https://en.wikipedia.org/wiki/Fahr%27s_syndrome"
    },
    "Larsen syndrome": {
        "summary": "Larsen syndrome (LS) is a congenital disorder discovered in 1950 by Larsen and associates when they observed dislocation of the large joints and face anomalies in six of their patients. Patients suffering from Larsen syndrome normally present with a variety of symptoms, including congenital anterior dislocation of the knees, dislocation of the hips and elbows, flattened facial appearance, prominent foreheads, and depressed nasal bridges. Larsen syndrome can also cause a variety of cardiovascular and orthopedic abnormalities. This rare disorder is caused by a genetic defect in the gene encoding filamin B, a cytoplasmic protein that is important in regulating the structure and activity of the cytoskeleton. The gene that influences the emergence of Larsen syndrome is found in chromosome region, 3p21.1-14.1, a region containing human type VII collagen gene. Larsen syndrome has recently been described as a mesenchyme disorder that affects the connective tissue of an individual. Autosomal dominant and recessive forms of the disorder have been reported, although most cases are autosomal dominant. Reports have found that in Western societies, Larsen syndrome can be found in one in every 100,000 births, but this is most likely an underestimate because the disorder is frequently unrecognized or misdiagnosed.",
        "symptoms": [
            "deformity",
            "scoliosis",
            "depressed",
            "ataxia",
            "ptosis",
            "cirrhosis",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Larsen_syndrome"
    },
    "Nephrogenic diabetes insipidus": {
        "summary": "Nephrogenic diabetes insipidus (also known as renal diabetes insipidus) is a form of diabetes insipidus primarily due to pathology of the kidney. This is in contrast to central/neurogenic diabetes insipidus, which is caused by insufficient levels of antidiuretic hormone (ADH)/Arginine Vasopressin (AVP). Nephrogenic diabetes insipidus is caused by an improper response of the kidney to ADH, leading to a decrease in the ability of the kidney to concentrate the urine by removing free water.",
        "symptoms": [
            "excessive thirst",
            "blindness",
            "deafness",
            "asthenia",
            "seizure",
            "polyuria",
            "high blood sugar",
            "paralysis",
            "dehydration",
            "urinary incontinence",
            "hyperthermia",
            "incontinence",
            "ataxia",
            "ptosis",
            "gas",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Nephrogenic_diabetes_insipidus"
    },
    "Lysinuric protein intolerance": {
        "summary": "Lysinuric protein intolerance (LPI), also called hyperdibasic aminoaciduria type 2,cationic aminoaciduria or familial protein intolerance, is an autosomal recessive metabolic disorder affecting amino acid transport.",
        "symptoms": [
            "poor appetite",
            "vomiting",
            "convulsions",
            "ataxia"
        ],
        "url": "https://en.wikipedia.org/wiki/Lysinuric_protein_intolerance"
    },
    "Baller\u2013Gerold syndrome": {
        "summary": "Baller\u2013Gerold syndrome (BGS) is a rare genetic syndrome that involves premature fusion of the skull bones and malformations of facial, forearm and hand bones. The symptoms of Baller\u2013Gerold syndrome overlap with features of a few other genetics disorders: Rothmund-Thomson syndrome and RAPADILINO syndrome. The prevalence of BGS is unknown, as there have only been a few reported cases, but it is estimated to be less than 1 in a million. The name Baller-Gerold comes from the researchers Baller and Gerold who discovered the first three cases.",
        "symptoms": [
            "edema",
            "gas",
            "hyperpigmentation"
        ],
        "url": "https://en.wikipedia.org/wiki/Baller%E2%80%93Gerold_syndrome"
    },
    "Fountain syndrome": {
        "summary": "Fountain syndrome is an autosomal recessive congenital disorder characterized by mental retardation, deafness, skeletal abnormalities and a coarse face with full lips. The abnormal swelling of the cheeks and lips are due to the excessive accumulation of body fluids under the skin. The deafness is due to malformation of the cochlea structure within the inner ear.",
        "symptoms": [
            "seizure",
            "swelling",
            "deafness",
            "gas",
            "edema"
        ],
        "url": "https://en.wikipedia.org/wiki/Fountain_syndrome"
    },
    "Shy-Drager syndrome": {
        "summary": "Multiple system atrophy (MSA) is a degenerative neurological disorder that depicts a group of disorders characterised by the neuronal degeneration mainly in the substantia nigra, striatum, autonomic nervous system and cerebellum. Following a report in 1964 of what was then called striatonigral degeneration, many patients were recognised in whom the changes of striatonigral and olivopontocerebellar degeneration were combined and who had symptoms and signs of cerebellar ataxia and parkinsonian manifestations. More than half of the patients with striatonigral degeneration have orthostatic hypotension, which proves at autopsy to be associated with loss of intermediolateral horn cells (origin of the presynaptic cholinergic sympathetic neurones) and of pigmented nuclei of the brainstem.",
        "symptoms": [
            "dry mouth",
            "impotence",
            "speech problem",
            "double vision",
            "paralysis",
            "dysarthria",
            "constipation",
            "dehydration",
            "sleep disorders",
            "dizziness",
            "low blood pressure",
            "snoring",
            "urinary incontinence",
            "hypotension",
            "incontinence",
            "tachycardia",
            "tremor",
            "ataxia",
            "sleep apnea",
            "sweating",
            "dysphagia"
        ],
        "url": "https://en.wikipedia.org/wiki/Shy-Drager_syndrome"
    },
    "Brooke Greenberg": {
        "summary": "Brooke Megan Greenberg (January 8, 1993 \u2013 October 24, 2013) was an American who remained physically and cognitively similar to a toddler, despite her increasing age. She was about 30\u00a0in (76\u00a0cm) tall, weighed about 16\u00a0lb (7.3\u00a0kg) and had an estimated mental age of nine months to one year. Brooke's doctors termed her condition Syndrome X.",
        "symptoms": [
            "difficulty breathing",
            "seizure",
            "deformity"
        ],
        "url": "https://en.wikipedia.org/wiki/Brooke_Greenberg"
    },
    "Rapid-onset Obesity with Hypothalamic dysfunction, Hypoventilation and Autonomic Dysregulation": {
        "summary": "Rapid-onset Obesity with Hypothalamic dysfunction, Hypoventilation and Autonomic Dysregulation (ROHHAD syndrome) is a very rare disease affecting approximately only 75 cases worldwide. Patients with ROHHAD, as well as patients with congenital central hypoventilation syndrome (CCHS) have damage to the mechanism governing proper breathing. ROHHAD syndrome is a disease that is potentially lethal and incurable. Fifteen patients with ROHHAD were evaluated by Diego Ize-Ludlow et al. work published in 2007.",
        "symptoms": [
            "obesity",
            "sleep apnea",
            "sweating",
            "gas",
            "hypoventilation"
        ],
        "url": "https://en.wikipedia.org/wiki/ROHHAD"
    },
    "Townes\u2013Brocks syndrome": {
        "summary": "Townes\u2013Brocks syndrome (TBS) is a rare genetic disease that has been described in approximately 200 cases in the published literature. It affects both males and females equally. The condition was first identified in 1972. by Philip L. Townes, MD, PhD, who was at the time a human geneticists and Professor of Pediatrics, and Eric Brocks, MD, who was at the time a medical student, both at the University of Rochester.",
        "symptoms": [
            "edema",
            "learning difficulties",
            "rash",
            "deafness",
            "hearing loss"
        ],
        "url": "https://en.wikipedia.org/wiki/Townes%E2%80%93Brocks_syndrome"
    },
    "Blepharophimosis, Ptosis, Epicanthus Inversus Syndrome": {
        "summary": "Blepharophimosis, ptosis, epicanthus inversus syndrome or BPES is a rare disease characterized by the conditions it is named after: blepharophimosis, ptosis, and epicanthus inversus.",
        "symptoms": [
            "infertility",
            "ptosis",
            "drooping eyelid"
        ],
        "url": "https://en.wikipedia.org/wiki/Blepharophimosis,_Ptosis,_Epicanthus_Inversus_Syndrome"
    },
    "Bruck syndrome": {
        "summary": "Bruck syndrome is characterized as the combination of arthrogryposis multiplex congenita and osteogenesis imperfecta. Both diseases are uncommon, but concurrence is extremely rare which makes Bruck syndrome very difficult to research. Bruck syndrome is thought to be an atypical variant of osteogenesis imperfecta most resembling type III, if not its own disease. Multiple gene mutations associated with osteogenesis imperfecta are not seen in Bruck syndrome. Many affected individuals are within the same family, and pedigree data supports that the disease is acquired through autosomal recessive inheritance. Bruck syndrome has features of congenital contractures, bone fragility, recurring bone fractures, flexion joint and limb deformities, pterygia, short body height, and progressive kyphoscoliosis. Individuals encounter restricted mobility and pulmonary function. A reduction in bone mineral content and larger hydroxyapatite crystals are also detectable Joint contractures are primarily bilateral and symmetrical, and most prone to ankles. Bruck syndrome has no effect on intelligence, vision, or hearing.",
        "symptoms": [
            "bone fragility",
            "scoliosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Bruck_syndrome"
    },
    "ABCD syndrome": {
        "summary": "ABCD syndrome is the acronym for albinism, black lock, cell migration disorder of the neurocytes of the gut, and sensorineural deafness. It has been found to be caused by mutation in the endothelin B receptor gene (EDNRB).",
        "symptoms": [
            "aching",
            "phobia",
            "blindness",
            "deafness",
            "asthenia",
            "hearing loss",
            "nystagmus",
            "hyperpigmentation",
            "red eyes",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/ABCD_syndrome"
    },
    "Alstr\u00f6m syndrome": {
        "summary": "Alstr\u00f6m syndrome, also called Alstrom-Halgren Syndrome, is a rare genetic disorder caused by mutations in the gene ALMS1. It is among the rarest genetic disorders in the world, as currently it has only 266 reported cases in medical literature and over 501 known cases in 47 countries. It was first described by Carl-Henry Alstr\u00f6m in Sweden in 1959. Alstrom syndrome is sometimes confused with Bardet-Biedl syndrome, which has similar symptoms. Bardet-Biedl syndrome tends to have later onset in its symptoms. The likelihood of two carrier parents both passing the gene and therefore having a child affected by the syndrome is 25% with each pregnancy. The likelihood of having a child who is only a carrier of the gene is 50% with each pregnancy. The likelihood of a child receiving normal genes from both parents and being considered to be \"genetically\" normal is 25%. The risk for carrying the gene is equivalent for both males and females.",
        "symptoms": [
            "phobia",
            "blindness",
            "deafness",
            "scoliosis",
            "hearing loss",
            "obesity",
            "alopecia",
            "nystagmus",
            "liver failure",
            "cirrhosis",
            "irregular menses",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Alstr%C3%B6m_syndrome"
    },
    "L\u00e9ri\u2013Weill dyschondrosteosis": {
        "summary": "L\u00e9ri\u2013Weill dyschondrosteosis or LWD is a rare pseudoautosomal dominant genetic disorder which results in dwarfism with short forearms and legs (mesomelic dwarfism) and a bayonet-like deformity of the forearms (Madelung's deformity).",
        "symptoms": [
            "rash",
            "deformity",
            "edema"
        ],
        "url": "https://en.wikipedia.org/wiki/L%C3%A9ri%E2%80%93Weill_dyschondrosteosis"
    },
    "Harlequin syndrome": {
        "summary": "Harlequin syndrome is a condition characterized by asymmetric sweating and flushing on the upper thoracic region of the chest, the neck, and the face. It is caused by sustaining an injury to the sympathetic nervous system. Listed as a rare disease, Harlequin syndrome affects fewer than 200,000 people in the United States.",
        "symptoms": [
            "sweating"
        ],
        "url": "https://en.wikipedia.org/wiki/Harlequin_syndrome"
    },
    "Maple syrup urine disease": {
        "summary": "Maple syrup urine disease (MSUD), also called branched-chain ketoaciduria, is an autosomal recessive metabolic disorder affecting branched-chain amino acids. It is one type of organic acidemia. The condition gets its name from the distinctive sweet odor of affected infants' urine, particularly prior to diagnosis, and during times of acute illness.",
        "symptoms": [
            "edema",
            "seizure",
            "lethargy",
            "dehydration",
            "vomiting",
            "ataxia",
            "fatigue",
            "gas",
            "weight loss"
        ],
        "url": "https://en.wikipedia.org/wiki/Maple_syrup_urine_disease"
    },
    "Superficial siderosis": {
        "summary": "Superficial hemosiderosis of the central nervous system is a disease of the brain resulting from chronic iron deposition in neuronal tissues associated with cerebrospinal fluid. This occurs via the deposition of hemosiderin in neuronal tissue, and is associated with neuronal loss, gliosis, and demyelination of neuronal cells. This disease was first discovered in 1908 by R.C. Hamill after performing an autopsy. Detection of this disease was largely post-mortem until the advent of MRI technology, which made diagnosis far easier. Superficial siderosis is largely considered a rare disease, with less than 270 total reported cases in scientific literature as of 2006, and affects people of a wide range of ages with men being approximately three times more frequently affected than women. The number of reported cases of superficial siderosis has increased with advances in MRI technology, but it remains a rare disease.",
        "symptoms": [
            "ataxia",
            "bleeding",
            "deafness",
            "trauma",
            "hearing loss"
        ],
        "url": "https://en.wikipedia.org/wiki/Superficial_siderosis"
    },
    "MGUS polyneuropathy": {
        "summary": "MGUS polyneuropathy or polyneuropathy associated with an M component is a rare neurological disease characterized by inflammation of the peripheral nervous system and monoclonal gammopathy of undetermined significance (MGUS). It was first described in the 1960s. The main symptoms are progressive muscle weakness that is symmetrical and bilateral, ataxia, numbness and arm tremor. Treatments include intravenous immunoglobulin, which is a short-term treatment, immunosuppressants, though they have not been shown to be effective, autologous stem cell transplantation, and rituximab.",
        "symptoms": [
            "muscle weakness",
            "weakness",
            "inflammation",
            "numbness",
            "tremor",
            "ataxia"
        ],
        "url": "https://en.wikipedia.org/wiki/MGUS_polyneuropathy"
    },
    "Rothmund\u2013Thomson syndrome": {
        "summary": "Rothmund\u2013Thomson syndrome (RTS), also known as poikiloderma atrophicans with cataract or poikiloderma congenitale, is a rare autosomal recessive skin condition originally described by August von Rothmund (1830\u20131906) in 1868. Matthew Sydney Thomson (1894\u20131969) published further descriptions in 1936.",
        "symptoms": [
            "alopecia",
            "rash",
            "urticaria",
            "ataxia",
            "edema"
        ],
        "url": "https://en.wikipedia.org/wiki/Rothmund%E2%80%93Thomson_syndrome"
    },
    "Cruveilhier\u2013Baumgarten disease": {
        "summary": "Cruveilhier\u2013Baumgarten disease or P\u00e9got-Cruveilhier\u2013Baumgarten disease is a rare medical condition in which the umbilical or paraumbilical veins are distended, with an abdominal wall bruit (the Cruveilhier-Baumgarten bruit) and palpable thrill, portal hypertension with splenomegaly, hypersplenism and oesophageal varices, with a normal or small liver.",
        "symptoms": [
            "cirrhosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Cruveilhier%E2%80%93Baumgarten_disease"
    },
    "Friedreich's ataxia": {
        "summary": "Friedreich's ataxia is an autosomal recessive inherited disease that causes progressive damage to the nervous system. It manifests in initial symptoms of poor coordination such as gait disturbance; it can also lead to scoliosis, heart disease and diabetes, but does not affect cognitive function. The disease is progressive, and ultimately a wheelchair is required for mobility. Its incidence in the general population is roughly 1 in 50,000.",
        "symptoms": [
            "edema",
            "weakness",
            "aphasia",
            "seizure",
            "insomnia",
            "loss of coordination",
            "scoliosis",
            "headache",
            "muscle weakness",
            "sleep apnea",
            "myopathy",
            "abscess",
            "heart murmur",
            "slurred speech",
            "inflammation",
            "tachycardia",
            "nystagmus",
            "hypotension",
            "akathisia",
            "deformity",
            "dysarthria",
            "hypoventilation",
            "sleep disorders",
            "cataplexy",
            "tremor",
            "ataxia",
            "fatigue",
            "dysphagia"
        ],
        "url": "https://en.wikipedia.org/wiki/Friedreich%27s_ataxia"
    },
    "Adams\u2013Oliver syndrome": {
        "summary": "Adams\u2013Oliver syndrome (AOS) is a rare congenital disorder characterized by defects of the scalp and cranium (cutis aplasia congenita), transverse defects of the limbs, and mottling of the skin.",
        "symptoms": [
            "seizure"
        ],
        "url": "https://en.wikipedia.org/wiki/Adams%E2%80%93Oliver_syndrome"
    },
    "Primrose syndrome": {
        "summary": "Primrose syndrome is a rare, slowly progressive genetic disorder that can vary symptomatically between individual cases, but is generally characterised by ossification of the external ears, learning difficulties, and facial abnormalities. It was first described in 1982 in Scotland's Royal National Larbert Institution by Dr D.A.A. Primrose.",
        "symptoms": [
            "deafness",
            "learning difficulties",
            "paralysis",
            "ataxia",
            "hearing loss"
        ],
        "url": "https://en.wikipedia.org/wiki/Primrose_syndrome"
    },
    "Juvenile nephronophthisis": {
        "summary": "Juvenile nephronophthisis is the juvenile form of nephronophthisis that causes end stage renal disease around the age of 13; infantile nephronophthisis and adolescent nephronophthisis cause ESRD around the ages of 1 and 19, respectively.",
        "symptoms": [
            "polyuria",
            "fatigue",
            "weakness"
        ],
        "url": "https://en.wikipedia.org/wiki/Juvenile_nephronophthisis"
    },
    "Properdin deficiency": {
        "summary": "Properdin deficiency is a rare X-linked disease in which properdin, an important complement factor, is deficient. Affected individuals are susceptible to fulminant meningococcal disease.",
        "symptoms": [
            "edema",
            "ataxia",
            "blindness",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Properdin_deficiency"
    },
    "Rabbit syndrome": {
        "summary": "Rabbit syndrome is a rare form of extrapyramidal side effect of antipsychotic drugs in which perioral tremors occur at a rate of 5\u00a0Hz. Rabbit syndrome is characterized by involuntary, fine, rhythmic motions of the mouth along a vertical plane, without involvement of the tongue. It is usually seen after years of pharmacotherapy, and is more prominent with high potency drugs like haloperidol, fluphenazine, and pimozide. There is also a low incidence with thioridazine, clozapine, olanzapine, aripiprazole, and low doses of risperidone.",
        "symptoms": [
            "tremor",
            "tremors"
        ],
        "url": "https://en.wikipedia.org/wiki/Rabbit_syndrome"
    },
    "Edwards syndrome": {
        "summary": "Edwards syndrome, also known as trisomy 18, is a genetic disorder caused by the presence of all, or part of a third copy of chromosome 18. Many parts of the body are affected. Babies are often born small and have heart defects. Other features include a small head, small jaw, clenched fists with overlapping fingers, and severe intellectual disability.",
        "symptoms": [
            "apnea",
            "ptosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Edwards_syndrome"
    },
    "Chorea acanthocytosis": {
        "summary": "Chorea-acanthocytosis (ChAc, also called Choreoacanthocytosis), is a rare hereditary disease caused by a mutation of the gene that directs structural proteins in red blood cells. It belongs to a group of four diseases characterized under the name Neuroacanthocytosis. When a patient's blood is viewed under a microscope, some of the red blood cells appear thorny. These thorny cells are called acanthocytes.",
        "symptoms": [
            "bradykinesia",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Chorea_acanthocytosis"
    },
    "Unverricht\u2013Lundborg disease": {
        "summary": "Unverricht\u2013Lundborg disease (abbreviated ULD or EPM1) is the most common form of an uncommon group of genetic epilepsy disorders called the progressive myoclonus epilepsies. It is caused due to a mutation in the cystatin B gene (CSTB). The disease is named after Heinrich Unverricht, who first described it in 1891, and Herman Bernhard Lundborg, who researched it in greater detail in 1903. ULD onsets in children between the ages of 6 and 16; there are no known cases in which the person was older than 18. Most cases originate from the Baltic region of Europe, though many have been reported from countries in the Mediterranean.",
        "symptoms": [
            "aching",
            "seizure",
            "gas",
            "depression",
            "ataxia"
        ],
        "url": "https://en.wikipedia.org/wiki/Unverricht%E2%80%93Lundborg_disease"
    },
    "Beta-mannosidosis": {
        "summary": "Beta-mannosidosis, also called lysosomal beta-mannosidase deficiency, is a disorder of oligosaccharide metabolism caused by decreased activity of the enzyme beta-mannosidase. This enzyme is coded for by the gene MANBA, located at 4q22-25. Beta-mannosidosis is inherited in an autosomal recessive manner. Affected individuals appear normal at birth, and can have a variable clinical presentation. Infantile onset forms show severe neurodegeneration, while some children have intellectual disability. Hearing loss and angiokeratomas are common features of the disease, however because it is so rare, the full phenotype associated with the disease is not fully understood.",
        "symptoms": [
            "aggression",
            "hearing loss"
        ],
        "url": "https://en.wikipedia.org/wiki/Beta-mannosidosis"
    },
    "Michels syndrome": {
        "summary": "Michels syndrome is a syndrome characterised by intellectual disability, craniosynostosis, blepharophimosis, ptosis, epicanthus inversus, highly arched eyebrows, and hypertelorism. And vary in other symptoms such as asymmetry of the skull, eyelid, and anterior chamber anomalies, cleft lip and palate, umbilical anomalies, and growth and cognitive development.",
        "symptoms": [
            "ptosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Michels_syndrome"
    },
    "Necrotizing fasciitis": {
        "summary": "Necrotising fasciitis (NF), commonly known as flesh-eating disease, is an infection that results in the death of the body's soft tissue. It is a severe disease of sudden onset that spreads rapidly. Symptoms include red or purple skin in the affected area, severe pain, fever, and vomiting. The most commonly affected areas are the limbs and perineum.",
        "symptoms": [
            "mania",
            "trauma",
            "abscess",
            "hot skin",
            "inflammation",
            "obesity",
            "vomiting",
            "rash",
            "puncture wound",
            "fever",
            "liver failure",
            "drug abuse",
            "cirrhosis",
            "skin infection",
            "gas",
            "blister"
        ],
        "url": "https://en.wikipedia.org/wiki/Necrotizing_fasciitis"
    },
    "Aarskog\u2013Scott syndrome": {
        "summary": "Aarskog\u2013Scott syndrome is a rare disease inherited as autosomal dominant or X-linked and characterized by short stature, facial abnormalities, skeletal and genital anomalies.",
        "symptoms": [
            "edema",
            "hyperactivity",
            "seizure",
            "infertility",
            "ptosis",
            "gas",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Aarskog%E2%80%93Scott_syndrome"
    },
    "Citrullinemia type I": {
        "summary": "Citrullinemia type I (CTLN1), also known as arginosuccinate synthetase deficiency, is a rare disease caused by a deficiency in argininosuccinate synthetase, an enzyme involved in excreting excess nitrogen from the body. There are mild and severe forms of the disease, which is one of the urea cycle disorders.",
        "symptoms": [
            "edema",
            "seizure",
            "lethargy",
            "intracranial pressure",
            "vomiting",
            "liver failure",
            "ataxia",
            "irritability"
        ],
        "url": "https://en.wikipedia.org/wiki/Citrullinemia_type_I"
    },
    "Leukoencephalopathy with vanishing white matter": {
        "summary": "603896 603945 606273 606454 606686 606687 603896 603945 606273 606454 606686 606687 (CACH/VWM)\nCARASIL: 610149 600142 602194 600142 602194",
        "symptoms": [
            "edema",
            "aphasia",
            "seizure",
            "fever",
            "insomnia",
            "hallucination",
            "aggression",
            "headache",
            "irritability",
            "sleep apnea",
            "abscess",
            "inflammation",
            "vomiting",
            "hypotension",
            "delusion",
            "ptosis",
            "akathisia",
            "trauma",
            "sadness",
            "hypoventilation",
            "sleep disorders",
            "cataplexy",
            "tremor",
            "ataxia"
        ],
        "url": "https://en.wikipedia.org/wiki/Leukoencephalopathy_with_vanishing_white_matter"
    },
    "Adenylosuccinate lyase deficiency": {
        "summary": "Adenylosuccinate lyase deficiency, also called adenylosuccinase deficiency, is a rare autosomal recessive metabolic disorder characterized by the appearance of succinylaminoimidazolecarboxamide riboside (SAICA riboside) and succinyladenosine (S-Ado) in cerebrospinal fluid, urine.These two succinylpurines are the dephosphorylated derivatives of SAICA ribotide (SAICAR) and adenylosuccinate (S-AMP), the two substrates of adenylosuccinate lyase (ADSL), which catalyzes an important reaction in the de novo pathway of purine biosynthesis. ADSL catalyzes two distinct reactions in the synthesis of purine nucleotides, both of which involve the \u03b2-elimination of fumarate to produce aminoimidazole carboxamide ribotide (AICAR) from SAICAR or adenosine monophosphate (AMP) from S-AMP.",
        "symptoms": [
            "trauma",
            "aggressive behavior",
            "seizure",
            "infertility",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Adenylosuccinate_lyase_deficiency"
    },
    "Malignant hyperthermia": {
        "summary": "Malignant hyperthermia (MH) or malignant hyperpyrexia is a rare life-threatening condition that is usually triggered by exposure to certain drugs used for general anesthesia \u2014 specifically the volatile anesthetic agents and succinylcholine, a neuromuscular blocking agent. In susceptible individuals, these drugs can induce a drastic and uncontrolled increase in oxidative metabolism in skeletal muscle, which overwhelms the body's capacity to supply oxygen, remove carbon dioxide, and regulate body temperature, eventually leading to circulatory collapse and death if not immediately treated.",
        "symptoms": [
            "elevated temperature",
            "edema",
            "muscle weakness",
            "weakness",
            "trauma",
            "syncope",
            "asthenia",
            "deafness",
            "nausea",
            "seizure",
            "paralysis",
            "pyrexia",
            "shivering",
            "tachycardia",
            "vomiting",
            "hyperthermia",
            "ataxia",
            "hypothermia",
            "gas",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Malignant_hyperthermia"
    },
    "Asplenia with cardiovascular anomalies": {
        "summary": "Asplenia with cardiovascular anomalies, also known as Ivemark syndrome and right atrial isomerism, is an example of a heterotaxy syndrome. These uncommon congenital disorders are characterized by defects in the heart, spleen and paired organs such as the lungs and kidneys. Another name is \"asplenia-cardiovascular defect-heterotaxy\".",
        "symptoms": [
            "breathlessness",
            "lethargy"
        ],
        "url": "https://en.wikipedia.org/wiki/Asplenia_with_cardiovascular_anomalies"
    },
    "Dravet syndrome": {
        "summary": "Dravet syndrome, also known as severe myoclonic epilepsy of infancy (SMEI), is a type of epilepsy with seizures that are often triggered by hot temperatures or fever. It often begins around six months of age.",
        "symptoms": [
            "hyperactivity",
            "insomnia",
            "seizure",
            "sleep disorders",
            "fever",
            "ataxia",
            "gas",
            "somnolence"
        ],
        "url": "https://en.wikipedia.org/wiki/Dravet_syndrome"
    },
    "Progeroid syndromes": {
        "summary": "Progeroid syndromes (PS) are a group of rare genetic disorders which mimic physiological aging, making affected individuals appear to be older than they are. The term progeroid syndrome does not necessarily imply progeria (Hutchinson\u2013Gilford progeria syndrome), which is a specific type of progeroid syndrome.",
        "symptoms": [
            "edema",
            "hair loss",
            "deafness",
            "dry skin",
            "seizure",
            "high blood pressure",
            "infertility",
            "hearing loss",
            "scaly skin",
            "ataxia",
            "ptosis",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Progeroid_syndromes"
    },
    "Autosomal dominant porencephaly type I": {
        "summary": "Autosomal dominant porencephaly type I is a rare type of porencephaly that causes cysts to grow on the brain and damage to small blood vessels, which can lead to cognitive impairment, migraines, seizures, and hemiplegia or hemiparesis.",
        "symptoms": [
            "muscle spasm",
            "seizure",
            "trauma"
        ],
        "url": "https://en.wikipedia.org/wiki/Autosomal_dominant_porencephaly_type_I"
    },
    "Autosomal dominant polycystic kidney disease": {
        "summary": "Autosomal dominant polycystic kidney disease (ADPKD, autosomal dominant PKD or adult-onset PKD) is the most prevalent, potentially lethal, monogenic human disorder. It is associated with large interfamilial and intrafamilial variability, which can be explained to a large extent by its genetic heterogeneity and modifier genes. It is also the most common of the inherited cystic kidney diseases \u2014 a group of disorders with related but distinct pathogenesis, characterized by the development of renal cysts and various extrarenal manifestations, which in case of ADPKD include cysts in other organs, such as the liver, seminal vesicles, pancreas, and arachnoid membrane, as well as other abnormalities, such as intracranial aneurysms and dolichoectasias, aortic root dilatation and aneurysms, mitral valve prolapse, and abdominal wall hernias. Over 50% of patients with ADPKD eventually develop end stage kidney disease and require dialysis or kidney transplantation. ADPKD is estimated to affect at least 1 in every 1000 individuals worldwide, making this disease the most common inherited kidney disorder with a diagnosed prevalence of 1:2000 and incidence of 1:3000-1:8000 in a global scale.",
        "symptoms": [
            "chronic pain",
            "nausea",
            "rash",
            "vomiting",
            "flank pain",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Autosomal_dominant_polycystic_kidney_disease"
    },
    "Follicle-stimulating hormone insensitivity": {
        "summary": "Follicle-stimulating hormone (FSH) insensitivity, or ovarian insensitivity to FSH in females, also referable to as ovarian follicle hypoplasia or granulosa cell hypoplasia in females, is a rare autosomal recessive genetic and endocrine syndrome affecting both females and males, with the former presenting with much greater severity of symptomatology. It is characterized by a resistance or complete insensitivity to the effects of follicle-stimulating hormone (FSH), a gonadotropin which is normally responsible for the stimulation of estrogen production by the ovaries in females and maintenance of fertility in both sexes. The condition manifests itself as hypergonadotropic hypogonadism (decreased or lack of production of sex steroids by the gonads despite high circulating levels of gonadotropins), reduced or absent puberty (lack of development of secondary sexual characteristics, resulting in sexual infantilism if left untreated), amenorrhea (lack of menstruation), and infertility in females, whereas males present merely with varying degrees of infertility and associated symptoms (e.g., decreased sperm production).",
        "symptoms": [
            "edema",
            "asthenia",
            "rash",
            "infertility",
            "gas",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Follicle-stimulating_hormone_insensitivity"
    },
    "Thyroid hormone resistance": {
        "summary": "Thyroid hormone resistance (sometimes Refetoff syndrome) describes a rare syndrome in which the thyroid hormone levels are elevated but the thyroid stimulating hormone (TSH) level is not suppressed, or not completely suppressed as would be expected. The first report of the condition appeared in 1967. Essentially this is decreased end organ responsiveness to thyroid hormones. A new term \"impaired sensitivity to thyroid hormone\" has been suggested in March 2014 by Refetoff et al.",
        "symptoms": [
            "edema",
            "hyperactivity",
            "tachycardia",
            "rash",
            "depression",
            "gas",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Thyroid_hormone_resistance"
    },
    "Kohlsch\u00fctter-T\u00f6nz syndrome": {
        "summary": "Kohlsch\u00fctter-T\u00f6nz syndrome (KTS), also called Amelo-cerebro-hypohidrotic syndrome is a rare inherited syndrome characterized by epilepsy, dementia, intellectual disability, and yellow teeth caused by amelogenesis imperfecta (abnormal formation of tooth enamel). It is a type A ectodermal dysplasia.",
        "symptoms": [
            "seizure",
            "gas",
            "laceration"
        ],
        "url": "https://en.wikipedia.org/wiki/Kohlsch%C3%BCtter-T%C3%B6nz_syndrome"
    },
    "Adrenoleukodystrophy": {
        "summary": "Adrenoleukodystrophy (/-\u02cclu-ko\u028a-\u02c8dis-tr\u0259-fi\u02d0/; also known as X-linked adrenoleukodystrophy, ALD, X-ALD, Siemerling\u2013Creutzfeldt disease or bronze Schilder disease) is a disease linked to the X chromosome. It is a result of fatty acid buildup caused by the relevant enzymes not functioning properly, which then causes damage to the myelin sheathes of the nerves, resulting in seizures and hyperactivity. Other side effects include problems with speaking, listening and understanding verbal instructions.",
        "symptoms": [
            "akathisia",
            "edema",
            "blindness",
            "hyperactivity",
            "insomnia",
            "abscess",
            "aphasia",
            "seizure",
            "inflammation",
            "hypoventilation",
            "behavioral disturbances",
            "sleep disorders",
            "headache",
            "hypotension",
            "cataplexy",
            "tremor",
            "ataxia",
            "sleep apnea",
            "gas",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Adrenoleukodystrophy"
    },
    "Blue diaper syndrome": {
        "summary": "Blue diaper syndrome is a rare, autosomal recessive metabolic disorder characterized in infants by bluish urine-stained diapers. It is also known as Drummond's syndrome, and hypercalcemia.",
        "symptoms": [
            "frequent fevers",
            "poor growth",
            "constipation",
            "visual problems",
            "fever",
            "vomiting",
            "poor appetite",
            "irritability"
        ],
        "url": "https://en.wikipedia.org/wiki/Blue_diaper_syndrome"
    },
    "Cowden syndrome": {
        "summary": "Cowden syndrome (also known as \"Cowden's disease,\" and \"multiple hamartoma syndrome\") is a rare autosomal dominant inherited disorder characterized by multiple non-cancerous tumor-like growths called hamartomas, which typically are found in the skin, mucous membranes (mouth, nasal membranes, GI tract), thyroid gland, and breast tissue. While the hamartomas are benign, people with Cowden Syndrome are at increased risk of certain forms of cancer, including breast, thyroid, uterus (endometrial), and kidney cancers.",
        "symptoms": [
            "ataxia",
            "gas",
            "skin lesion",
            "hyperactivity",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Cowden_syndrome"
    },
    "Diphallia": {
        "summary": "Diphallia, penile duplication (PD), diphallic terata, or diphallasparatus, is a rare developmental abnormality in which a male infant is born with two penises. The first reported case was by Johannes Jacob Wecker in 1609. Its occurrence is 1 in 5.5 million boys in the United States.",
        "symptoms": [
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Diphallia"
    },
    "Fatal familial insomnia": {
        "summary": "Fatal familial insomnia (FFI) is an extremely rare autosomal dominant inherited prion disease of the brain. It is almost always caused by a mutation to the protein PrPC, but can also develop spontaneously in patients with a non-inherited mutation variant called sporadic fatal insomnia (sFI). FFI has no known cure and involves progressively worsening insomnia, which leads to hallucinations, delirium, confusional states like that of dementia, and eventually, death. The average survival time for patients diagnosed with FFI after the onset of symptoms is 18 months.",
        "symptoms": [
            "confusion",
            "phobia",
            "impotence",
            "paranoia",
            "hallucination",
            "double vision",
            "constipation",
            "panic attack",
            "convulsions",
            "depression",
            "trouble sleeping",
            "memory loss",
            "neck stiffness",
            "insomnia",
            "sweating"
        ],
        "url": "https://en.wikipedia.org/wiki/Fatal_familial_insomnia"
    },
    "Ramsay Hunt syndrome type 1": {
        "summary": "Ramsay Hunt syndrome (RHS) type 1 is a rare, degenerative, neurological disorder characterized by myoclonus epilepsy, intention tremor, progressive ataxia and occasionally cognitive impairment ",
        "symptoms": [
            "akathisia",
            "edema",
            "insomnia",
            "abscess",
            "aphasia",
            "seizure",
            "asthenia",
            "tremors",
            "inflammation",
            "hypoventilation",
            "sleep disorders",
            "convulsions",
            "headache",
            "hypotension",
            "cataplexy",
            "tremor",
            "ataxia",
            "sleep apnea"
        ],
        "url": "https://en.wikipedia.org/wiki/Ramsay_Hunt_syndrome_type_1"
    },
    "Bonnet\u2013Dechaume\u2013Blanc syndrome": {
        "summary": "Bonnet\u2013Dechaume\u2013Blanc syndrom, also known as Wyburn-Mason syndrome, is a rare congential arteriovenous malformation of the brain, retina or facial nevi. The syndrome has a number of possible symptoms and can affect the skin, bones, kidneys, muscles, and gastrointestinal tract. When the syndrome affects the brain, people can experience severe headaches, seizures, acute stroke, meningism and progressive neurological deficits due to acute or chronic ischaemia caused by arteriovenous shunting.",
        "symptoms": [
            "edema",
            "seizure",
            "paresthesias",
            "vomiting",
            "paresthesia",
            "headache",
            "ptosis",
            "gas"
        ],
        "url": "https://en.wikipedia.org/wiki/Bonnet%E2%80%93Dechaume%E2%80%93Blanc_syndrome"
    },
    "Bietti's crystalline dystrophy": {
        "summary": "Bietti's crystalline dystrophy (BCD), also called Bietti crystalline corneoretinal dystrophy, is a rare autosomal recessive eye disease named after Dr. G. B. Bietti.",
        "symptoms": [
            "red eye",
            "diplopia",
            "edema",
            "phobia",
            "blindness",
            "inflammation",
            "nystagmus",
            "exophthalmos",
            "ptosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Bietti%27s_crystalline_dystrophy"
    },
    "Carnitine-acylcarnitine translocase deficiency": {
        "summary": "Carnitine-acylcarnitine translocase deficiency is a rare, autosomal recessive metabolic disorder that prevents the body from converting long-chain fatty acids into energy, particularly during periods without food. Carnitine, a natural substance acquired mostly through the diet, is used by cells to process fats and produce energy. People with this disorder have a faulty enzyme that prevents long-chain fatty acids from being transported into the innermost part of the mitochondria for processing.",
        "symptoms": [
            "low blood sugar",
            "irregular heartbeat",
            "weakness",
            "seizure",
            "breathing problems",
            "arrhythmia",
            "muscle weakness",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Carnitine-acylcarnitine_translocase_deficiency"
    },
    "Nance\u2013Horan syndrome": {
        "summary": "Nance\u2013Horan syndrome is a rare X linked syndrome characterized by congenital cataract leading to profound vision loss, characteristic dysmorphic features and dental anomalies. Microcornea, microphthalmia and mild or moderate mental retardation may accompany these features. Heterozygous females often manifest similarly but with less severe features than affected males.",
        "symptoms": [
            "red eye",
            "diplopia",
            "edema",
            "phobia",
            "blindness",
            "inflammation",
            "nystagmus",
            "exophthalmos",
            "ptosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Nance%E2%80%93Horan_syndrome"
    },
    "Michels Caskey syndrome": {
        "summary": "Michels Caskey syndrome is a rare disorder that combines spinal and skeletal abnormalities, especially of the thumbs, with abnormal or absent female reproductive organs. Examples include the absence of a cervix and upper vagina or abnormalities of the uterus or vagina. Symptoms may also include scoliosis and primary amenorrhea. Synonyms include Mullerian aplasia with hypoplastic thumbs, hypoplastic thumb Mullerian aplasia, and Mullerian aplasia with unilateral hypoplasia of the thumbs and skeletal spine deformities.",
        "symptoms": [
            "scoliosis"
        ],
        "url": "https://en.wikipedia.org/wiki/Michels_Caskey_syndrome"
    },
    "Primary ciliary dyskinesia": {
        "summary": "Primary ciliary dyskinesia (PCD), also immotile ciliary syndrome or Kartagener syndrome, is a rare, ciliopathic, autosomal recessive genetic disorder that causes defects in the action of cilia lining the respiratory tract (lower and upper, sinuses, Eustachian tube, middle ear) and fallopian tube, as well as in the flagella of sperm cells. The phrase \"immotile ciliary syndrome\" is no longer favored as the cilia do have movement, but may be inefficient or unsynchronized.",
        "symptoms": [
            "infertility",
            "hearing loss"
        ],
        "url": "https://en.wikipedia.org/wiki/Primary_ciliary_dyskinesia"
    },
    "Neuromyotonia": {
        "summary": "Neuromyotonia (NMT), also known as Isaacs Syndrome and Isaacs-Merton syndrome, is a form of peripheral nerve hyperexcitability that causes spontaneous muscular activity resulting from repetitive motor unit action potentials of peripheral origin. Prevalence is unknown but 100\u2013200 cases have been reported so far.",
        "symptoms": [
            "confusion",
            "weakness",
            "hyperactivity",
            "twitching",
            "hallucination",
            "asthenia",
            "seizure",
            "deafness",
            "anxiety",
            "paralysis",
            "delusion",
            "muscle spasm",
            "hyperthermia",
            "muscle cramps",
            "memory loss",
            "twitch",
            "ataxia",
            "fatigue",
            "sweating",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Neuromyotonia"
    },
    "Ameloblastic carcinoma": {
        "summary": "Ameloblastic carcinoma is a rare form of odontogenic tumor, one that develops in the jawbones from the epithelial cells that generate the tooth enamel. Symptoms include swelling in the jaw and pain, both of which get worse as the cancer grows. It is usually treated with surgery; chemotherapy has not been proven to be effective.",
        "symptoms": [
            "swelling"
        ],
        "url": "https://en.wikipedia.org/wiki/Ameloblastic_carcinoma"
    },
    "Occipital horn syndrome": {
        "summary": "Occipital horn syndrome (OHS), formerly considered a variant of Ehlers-Danlos syndrome, is an X-linked recessive connective tissue disorder. It is caused by a deficiency in the transport of the essential mineral copper, associated with mutations in the ATP7A gene. Only about 2/3 of children with OHS are thought to have genetically inherited the disorder; the other 1/3 do not have the disease in their family history. Since the disorder is X-linked recessive the disease affects more males. This is because they do not have a second X chromosome, unlike females, so essentially are lacking the 'backup' copy with proper function. Females are much more likely to be carriers only. For a female to be affected they must carry two defective X chromosomes, not just one. The disorder is considered a milder variant of Menkes disease.",
        "symptoms": [
            "seizure",
            "blindness",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Occipital_horn_syndrome"
    },
    "Ring chromosome 14 syndrome": {
        "summary": "Ring chromosome 14 syndrome is a very rare human chromosome abnormality. It occurs when one or both of the telomeres that mark the ends of chromosome 14 are lost allowing the now uncapped ends to fuse together forming a ring chromosome. It causes a number of serious health issues, most notably recurrent treatment-resistant seizures and intellectual disability.",
        "symptoms": [
            "seizure",
            "hyperactivity",
            "edema"
        ],
        "url": "https://en.wikipedia.org/wiki/Ring_chromosome_14_syndrome"
    },
    "Epidermolytic hyperkeratosis": {
        "summary": "Epidermolytic hyperkeratosis, (also known as Bullous congenital ichthyosiform erythroderma, Bullous ichthyosiform erythroderma,:482 or bullous congenital ichthyosiform erythroderma Brocq) is a rare ichthyosis skin disease affecting around 1 in 250,000 people.",
        "symptoms": [
            "edema",
            "trauma",
            "inflammation",
            "scaly skin",
            "urticaria",
            "ataxia",
            "blister",
            "cirrhosis",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Epidermolytic_hyperkeratosis"
    },
    "IPEX syndrome": {
        "summary": "IPEX (immunodysregulation polyendocrinopathy enteropathy X-linked syndrome) is a rare disease linked to the dysfunction of the transcription factor FOXP3, widely considered to be the master regulator of the regulatory T cell lineage.",
        "symptoms": [
            "edema",
            "rash",
            "blindness",
            "alopecia",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/IPEX_syndrome"
    },
    "Anomalous aortic origin of a coronary artery": {
        "summary": "Anomalous aortic origin of a coronary artery (AAOCA) from the inappropriate sinus of Valsalva with an interarterial, intraconal, or intramural course is a rare heart defect associated with an increased risk of sudden death in children.",
        "symptoms": [
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Anomalous_aortic_origin_of_a_coronary_artery"
    },
    "Oculodentodigital dysplasia": {
        "summary": "Oculodentodigital syndrome (ODD syndrome) is an extremely rare genetic condition that typically results in small eyes, underdeveloped teeth, and syndactyly and malformation of the fourth and fifth fingers. It has also been called oculo-dento-digital syndrome, oculodentodigital dysplasia (ODDD), and oculodentoosseous dysplasia (ODOD). It is considered a kind of ectodermal dysplasia.",
        "symptoms": [
            "ataxia",
            "hyperthermia",
            "paralysis",
            "deafness",
            "seizure"
        ],
        "url": "https://en.wikipedia.org/wiki/Oculodentodigital_dysplasia"
    },
    "Kearns\u2013Sayre syndrome": {
        "summary": "Kearns\u2013Sayre syndrome (abbreviated KSS), also known as oculocraniosomatic disorder or oculocraniosomatic neuromuscular disorder with ragged red fibers, is a mitochondrial myopathy with a typical onset before 20 years of age. KSS is a more severe syndromic variant of chronic progressive external ophthalmoplegia (abbreviated CPEO), a syndrome that is characterized by isolated involvement of the muscles controlling movement of the eyelid (levator palpebrae, orbicularis oculi) and eye (extra-ocular muscles). This results in ptosis and ophthalmoplegia respectively. KSS involves a combination of the already described CPEO as well as pigmentary retinopathy in both eyes and cardiac conduction abnormalities. Other symptoms may include cerebellar ataxia, proximal muscle weakness, deafness, diabetes mellitus, growth hormone deficiency, hypoparathyroidism, and other endocrinopathies. In both of these diseases, muscle involvement may begin unilaterally but always develops into a bilateral deficit, and the course is progressive. This discussion is limited specifically to the more severe and systemically involved variant.",
        "symptoms": [
            "red eye",
            "diplopia",
            "edema",
            "muscle weakness",
            "phobia",
            "weakness",
            "syncope",
            "blindness",
            "deafness",
            "asthenia",
            "paralysis",
            "inflammation",
            "hearing loss",
            "arrhythmia",
            "bradycardia",
            "nystagmus",
            "exophthalmos",
            "ptosis",
            "gas",
            "ataxia",
            "myopathy"
        ],
        "url": "https://en.wikipedia.org/wiki/Kearns%E2%80%93Sayre_syndrome"
    },
      "Schistosoma bovis": {
        "url": "https://en.wikipedia.org/wiki/Schistosoma_bovis",
        "symptoms": [
          "inflammation"
        ],
        "summary": "Schistosoma bovis is a two-host blood fluke, that causes intestinal schistosomiasis in ruminants in North Africa, Mediterranean Europe and the Middle East. S bovis is mostly transmitted by Bulinus freshwater snail species. It is one of nine haematobium group species and exists in the same geographical areas as Schistosoma haematobium, with which it can hybridise. S. bovis-S. haematobium hybrids can infect humans, and have been reported in West African countries, namely Senegal, and during a 2013 outbreak on Corsica."
      },
      "African trypanosomiasis": {
        "url": "https://en.wikipedia.org/wiki/African_trypanosomiasis",
        "symptoms": [
          "aching",
          "confusion",
          "itchiness",
          "joint pain",
          "snoring",
          "lethargy",
          "blindness",
          "numbness",
          "somnolence",
          "headache",
          "fever",
          "trouble sleeping",
          "convulsions",
          "swollen lymph nodes",
          "muscle weakness",
          "sleep disorders",
          "swelling",
          "sleep apnea",
          "tremor",
          "gas",
          "insomnia",
          "obesity",
          "itching",
          "weakness",
          "paralysis",
          "mania",
          "hypoventilation",
          "irritability",
          "chancre"
        ],
        "summary": "African trypanosomiasis, also known as sleeping sickness, is an insect-borne parasitic disease of humans and other animals. It is caused by protozoa of the species Trypanosoma brucei. There are two types that infect humans, Trypanosoma brucei gambiense (TbG) and Trypanosoma brucei rhodesiense (TbR). TbG causes over 98% of reported cases. Both are usually transmitted by the bite of an infected tsetse fly and are most common in rural areas."
      },
      "Soil-transmitted helminthiasis": {
        "url": "https://en.wikipedia.org/wiki/Soil-transmitted_helminthiasis",
        "symptoms": [
          "bleeding",
          "loss of appetite",
          "trauma",
          "skin rash",
          "cough",
          "fever",
          "urticaria",
          "weakness",
          "rash",
          "abdominal pain"
        ],
        "summary": "Soil-transmitted helminthiasis (STH) is a type of helminth infection (helminthiasis) caused by different species of roundworms. It is caused specifically by those worms which are transmitted through soil contaminated with faecal matter and are therefore called soil-transmitted helminths. Three types of soil-transmitted helminthiasis can be distinguished: ascariasis, hookworm infection and whipworm infection. These three types of infection are therefore caused by the large roundworm A. lumbricoides; the hookworms Necator americanusor Ancyclostoma duodenale; and by the whipworm Trichuris trichiura respectively."
      },
      "Helminthiasis": {
        "url": "https://en.wikipedia.org/wiki/Helminthiasis",
        "symptoms": [
          "mania",
          "edema",
          "irritability",
          "fatigue",
          "blindness",
          "aching",
          "gas",
          "inflammation",
          "seizure"
        ],
        "summary": "Helminthiasis (plural helminthiases), also known as worm infection, is any macroparasitic disease of humans and other animals in which a part of the body is infected with parasitic worms, known as helminths. There are numerous species of these parasites, which are broadly classified into tapeworms, flukes, and roundworms. They often live in the gastrointestinal tract of their hosts, but they may also burrow into other organs, where they induce physiological damage."
      },
      "Eastern equine encephalitis virus": {
        "url": "https://en.wikipedia.org/wiki/Eastern_equine_encephalitis_virus",
        "symptoms": [
          "headache",
          "altered mental status",
          "fever",
          "phobia",
          "seizure",
          "irritation",
          "paralysis"
        ],
        "summary": "Eastern equine encephalitis virus (EEE), commonly called Triple E or, sleeping sickness (not to be confused with Trypanosomiasis) is a zoonotic alphavirus and arbovirus present in North, Central and South America and the Caribbean. EEE was first recognized in Massachusetts, United States in 1831 when 75 horses died mysteriously of viral encephalitis."
      },
      "Tropical eosinophilia": {
        "url": "https://en.wikipedia.org/wiki/Tropical_eosinophilia",
        "symptoms": [
          "cough",
          "weight loss",
          "gas",
          "fever",
          "ptosis",
          "headache",
          "weakness",
          "inflammation"
        ],
        "summary": "Tropical (pulmonary) eosinophilia, or TPE, is characterized by coughing, asthmatic attacks, and an enlarged spleen, and is caused by Wuchereria bancrofti, a filarial infection. It occurs most frequently in India and Southeast Asia. Tropical eosinophilia is considered a manifestation of a species of microfilaria. This disease can be confused with tuberculosis, asthma, or coughs related to roundworms."
      },
      "Echinococcosis": {
        "url": "https://en.wikipedia.org/wiki/Echinococcosis",
        "symptoms": [
          "boil",
          "edema",
          "trauma",
          "cough",
          "dyspnea",
          "weight loss",
          "gas",
          "fever",
          "itching",
          "abdominal pain",
          "shortness of breath",
          "swelling",
          "jaundice"
        ],
        "summary": "Echinococcosis, also called hydatid disease, hydatidosis, or echinococcal disease, is a parasitic disease of tapeworms of the Echinococcus type. The two main types of the disease are cystic echinococcosis and alveolar echinococcosis. Less common forms include polycystic echinococcosis and unicystic echinococcosis. The disease often starts without symptoms and this may last for years. The symptoms and signs that occur depend on the cyst's location and size. Alveolar disease usually begins in the liver but can spread to other parts of the body, such as the lungs or brain. When the liver is affected the person may have abdominal pain, weight loss, and turn slightly yellow from jaundice. Lung disease may cause pain in the chest, shortness of breath and coughing."
      },
      "Aspergillosis": {
        "url": "https://en.wikipedia.org/wiki/Aspergillosis",
        "symptoms": [
          "liver failure",
          "bleeding",
          "cough",
          "fever",
          "itching",
          "difficulty breathing",
          "chest pain",
          "seizure",
          "chills",
          "jaundice"
        ],
        "summary": "Aspergillosis is the name given to a wide variety of diseases caused by infection by fungi of the genus Aspergillus. The majority of cases occur in people with underlying illnesses such as tuberculosis or chronic obstructive pulmonary disease (COPD), but with otherwise healthy immune systems. Most commonly, aspergillosis occurs in the form of chronic pulmonary aspergillosis (CPA), aspergilloma or allergic bronchopulmonary aspergillosis (ABPA). Some forms are intertwined; for example ABPA and simple aspergilloma can progress to CPA."
      },
      "Intestinal capillariasis": {
        "url": "https://en.wikipedia.org/wiki/Intestinal_capillariasis",
        "symptoms": [
          "edema",
          "depressed",
          "weight loss",
          "gas",
          "pedal edema",
          "abdominal pain"
        ],
        "summary": "Capillariasis is a disease in the group of helminthiasis diseases caused by the nematode Capillaria philippinensis."
      },
      "Filariasis": {
        "url": "https://en.wikipedia.org/wiki/Filariasis",
        "symptoms": [
          "sterility",
          "edema",
          "bleeding",
          "blindness",
          "headache",
          "nausea",
          "urticaria",
          "rash",
          "abdominal pain",
          "vomiting"
        ],
        "summary": "Filariasis is a parasitic disease caused by an infection with roundworms of the Filarioidea type. These are spread by blood-feeding black flies and mosquitoes. This disease belongs to the group of diseases called helminthiases."
      },
      "Spondweni fever": {
        "url": "https://en.wikipedia.org/wiki/Spondweni_fever",
        "symptoms": [
          "headache",
          "nausea",
          "fever",
          "epistaxis",
          "malaise",
          "chills"
        ],
        "summary": "Spondweni fever is an infectious disease caused by the Spondweni virus. It is characterized by a fever, chills, nausea, headaches, malaise and epistaxis. Transmitted by mosquitoes, it is found in sub-Saharan Africa and Papua New Guinea."
      },
      "Middle East respiratory syndrome": {
        "url": "https://en.wikipedia.org/wiki/Middle_East_respiratory_syndrome",
        "symptoms": [
          "myalgia",
          "cough",
          "gas",
          "fever",
          "abdominal pain",
          "shortness of breath",
          "vomiting"
        ],
        "summary": "Middle East respiratory syndrome (MERS), also known as camel flu, is a viral respiratory infection caused by the MERS-coronavirus (MERS-CoV). Symptoms may range from mild to severe. They include fever, cough, diarrhea, and shortness of breath. Disease is typically more severe in those with other health problems."
      },
      "Schistosomiasis": {
        "url": "https://en.wikipedia.org/wiki/Schistosomiasis",
        "symptoms": [
          "aching",
          "tingling",
          "urticaria",
          "blister",
          "infertility",
          "lethargy",
          "blindness",
          "fever",
          "high blood pressure",
          "seizure",
          "fatigue",
          "gas",
          "itching",
          "abdominal pain",
          "inflammation",
          "irritation",
          "chills",
          "paralysis",
          "mania",
          "muscle aches",
          "poor growth",
          "cough",
          "weight loss",
          "dysuria",
          "rash",
          "malaise"
        ],
        "summary": "11875 11882"
      },
      "Chikungunya": {
        "url": "https://en.wikipedia.org/wiki/Chikungunya",
        "symptoms": [
          "paralysis",
          "bleeding",
          "fatigue",
          "aching",
          "headache",
          "nausea",
          "gas",
          "fever",
          "insomnia",
          "rash",
          "abdominal pain",
          "joint pain",
          "asthenia",
          "swelling",
          "vomiting",
          "inflammation"
        ],
        "summary": "Chikungunya is an infection caused by the chikungunya virus (CHIKV). Symptoms include the fever and joint pain. These typically occur two to twelve days after exposure. Other symptoms may include headache, muscle pain, joint swelling, and a rash. Most people are better within a week; however, occasionally the joint pain may last for months. The risk of death is around 1 in 1,000. The very young, old, and those with other health problems are at risk of more severe disease."
      },
      "Dracunculiasis": {
        "url": "https://en.wikipedia.org/wiki/Dracunculiasis",
        "symptoms": [
          "dizziness",
          "mania",
          "paralysis",
          "edema",
          "boil",
          "blindness",
          "change in behavior",
          "nausea",
          "gas",
          "fever",
          "blister",
          "rash",
          "skin ulcers",
          "swelling",
          "vomiting"
        ],
        "summary": "Dracunculiasis, also called Guinea-worm disease (GWD), is an infection by the Guinea worm. A person becomes infected when they drink water that contains water fleas infected with guinea worm larvae. Initially there are no symptoms. About one year later, the person develops a painful burning feeling as the female worm forms a blister in the skin, usually on the lower limb. The worm then comes out of the skin over the course of a few weeks. During this time, it may be difficult to walk or work. It is very uncommon for the disease to cause death."
      },
      "Leishmaniasis": {
        "url": "https://en.wikipedia.org/wiki/Leishmaniasis",
        "symptoms": [
          "mania",
          "anomia",
          "skin sores",
          "boil",
          "skin lesion",
          "gas",
          "fever",
          "puncture wound",
          "skin ulcers"
        ],
        "summary": "Leishmaniasis, also spelled leishmaniosis, is a disease caused by protozoan parasites of the genus Leishmania and spread by the bite of certain types of sandflies. The disease can present in three main ways: cutaneous, mucocutaneous, or visceral leishmaniasis. The cutaneous form presents with skin ulcers, while the mucocutaneous form presents with ulcers of the skin, mouth, and nose, and the visceral form starts with skin ulcers and then later presents with fever, low red blood cells, and enlarged spleen and liver."
      },
      "Granulomatous amoebic encephalitis": {
        "url": "https://en.wikipedia.org/wiki/Granulomatous_amoebic_encephalitis",
        "symptoms": [
          "edema",
          "hypotension",
          "ataxia",
          "tremor",
          "headache",
          "insomnia",
          "aphasia",
          "akathisia",
          "hypoventilation",
          "abscess",
          "inflammation",
          "cataplexy",
          "seizure",
          "sleep disorders",
          "paralysis",
          "sleep apnea"
        ],
        "summary": "Granulomatous amoebic encephalitis (GAE) is a central nervous system disease caused by certain species of free-living amoebae, especially species of Acanthamoeba and Balamuthia mandrillaris."
      },
      "Lobomycosis": {
        "url": "https://en.wikipedia.org/wiki/Lobomycosis",
        "symptoms": [
          "insect bite",
          "skin trauma",
          "trauma"
        ],
        "summary": "Lobomycosis also known as (Jorge) Lobo's disease or lacaziosis, is a blastomycosis, a fungal infection of the skin caused by Lacazia loboi (formerly named Loboa loboi), and discovered by Brazilian dermatologist Jorge Lobo. Other names which were given to the disease are: keloidal blastomycosis, Amazonian blastomycosis, blastomycoid granuloma, miraip and piraip. These last two names were given by natives of the Amazon and mean that which burns."
      },
      "Paragonimiasis": {
        "url": "https://en.wikipedia.org/wiki/Paragonimiasis",
        "symptoms": [
          "urticaria",
          "cough",
          "fever",
          "abdominal pain",
          "hemoptysis"
        ],
        "summary": "Paragonimiasis is a food-borne parasitic infection caused by the lung fluke, most commonly Paragonimus westermani. It infects an estimated 22 million people yearly worldwide. It is particularly common in East Asia. More than 30 species of trematodes (flukes) of the genus Paragonimus have been reported; among the more than 10 species reported to infect humans, and only 8 bringing about infections in humans, the most common is P. westermani, the oriental lung fluke."
      },
      "Venezuelan equine encephalitis virus": {
        "url": "https://en.wikipedia.org/wiki/Venezuelan_equine_encephalitis_virus",
        "symptoms": [
          "headache",
          "fever"
        ],
        "summary": "Venezuelan equine encephalitis virus is a mosquito-borne viral pathogen that causes Venezuelan equine encephalitis or encephalomyelitis (VEE). VEE can affect all equine species, such as horses, donkeys, and zebras. After infection, equines may suddenly die or show progressive central nervous system disorders. Humans also can contract this disease. Healthy adults who become infected by the virus may experience flu-like symptoms, such as high fevers and headaches. People with weakened immune systems and the young and the elderly can become severely ill or die from this disease."
      },
      "Japanese encephalitis": {
        "url": "https://en.wikipedia.org/wiki/Japanese_encephalitis",
        "symptoms": [
          "lethargy",
          "deafness",
          "myalgia",
          "rigors",
          "cachexia",
          "nausea",
          "fever",
          "intracranial pressure",
          "headache",
          "urticaria",
          "convulsions",
          "infertility",
          "malaise",
          "seizure",
          "swelling",
          "vomiting",
          "inflammation"
        ],
        "summary": "Japanese encephalitis (JE), formerly known as Japanese B encephalitis to distinguish it from Economo's A encephalitis\u2014is a disease caused by the mosquito-borne Japanese encephalitis virus (JEV)."
      },
      "Lymphatic filariasis": {
        "url": "https://en.wikipedia.org/wiki/Lymphatic_filariasis",
        "symptoms": [
          "edema",
          "blindness",
          "skin rash",
          "ptosis",
          "urticaria",
          "rash",
          "abdominal pain",
          "swelling"
        ],
        "summary": "Lymphatic filariasis, also known as elephantiasis, is a human disease caused by parasitic worms known as filarial worms. Most cases of the disease have no symptoms. Some people, however, develop a syndrome called elephantiasis, which is marked by severe swelling in the arms, legs, or genitals. The skin may also become thicker, and pain may occur. The changes to the body can cause social and economic problems for the affected person."
      },
      "Tularemia": {
        "url": "https://en.wikipedia.org/wiki/Tularemia",
        "symptoms": [
          "mania",
          "lethargy",
          "loss of appetite",
          "skin lesion",
          "gas",
          "fever",
          "rash",
          "inflammation",
          "swelling",
          "paralysis"
        ],
        "summary": "Tularemia is a serious infectious disease caused by the intracellular bacterium Francisella tularensis. It causes fever, and sometimes ulceration at the site of entry and/or swelling of nearby lymph nodes. It can cause severe pneumonia."
      },
      "Onchocerciasis": {
        "url": "https://en.wikipedia.org/wiki/Onchocerciasis",
        "symptoms": [
          "edema",
          "urticaria",
          "tachycardia",
          "hyperpigmentation",
          "blindness",
          "fever",
          "ptosis",
          "seizure",
          "swelling",
          "red eye",
          "skin itching",
          "gas",
          "itching",
          "phobia",
          "abdominal pain",
          "inflammation",
          "paralysis",
          "mania",
          "hypotension",
          "loss of vision",
          "exophthalmos",
          "nystagmus",
          "rash",
          "diplopia"
        ],
        "summary": "Onchocerciasis, also known as river blindness, is a disease caused by infection with the parasitic worm Onchocerca volvulus. Symptoms include severe itching, bumps under the skin, and blindness. It is the second most common cause of blindness due to infection, after trachoma."
      },
      "Cryptococcosis": {
        "url": "https://en.wikipedia.org/wiki/Cryptococcosis",
        "symptoms": [
          "fatigue",
          "cough",
          "headache",
          "confusion",
          "fever",
          "cirrhosis",
          "blurred vision",
          "inflammation",
          "skin ulcers"
        ],
        "summary": "Cryptococcosis, also known as cryptococcal disease, is a potentially fatal fungal disease. It is caused by one of two species; Cryptococcus neoformans and Cryptococcus gattii. These were all previously thought to be subspecies of C. neoformans but have now been identified as distinct species."
      },
      "Opisthorchiasis": {
        "url": "https://en.wikipedia.org/wiki/Opisthorchiasis",
        "symptoms": [
          "edema",
          "fatigue",
          "gas",
          "fever",
          "inflammation",
          "irritation",
          "jaundice"
        ],
        "summary": "Opisthorchiasis is a parasitic disease caused by species in the genus Opisthorchis (specifically, Opisthorchis viverrini and Opisthorchis felineus). Chronic infection may lead to cholangiocarcinoma, a malignant cancer of the bile ducts."
      }
    }

