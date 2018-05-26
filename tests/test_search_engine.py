import spacy
import collections
from collections import defaultdict
import language_check
from nltk.parse import RecursiveDescentParser
from nltk import CFG
from nltk import Nonterminal, Production




tool = language_check.LanguageTool('en-US')
compare = dict()
		
nlp = spacy.load('en')

doc= nlp(u'This is a sentence')


myfile = open("examplefile.txt").read()
nextfile = open("who.txt").read()
otherfile = open("howmuch.txt").read()
anfile = open("whenis.txt").read()
anfile2 = open("howmany.txt").read()
doc_file = nlp(anfile2)



auxillary_verbs=["am", "is", "are", "was","were","being","been","be", "have", "has", "had", "do",
				 "does","did","will","would","shall","should","may","might","must","can","could"]
question_words={"Who":"","When":"","Where":"","What":"","Why":"","How":"", "Which":"", "How much":"quantity", "How many":"quantity"}
preposition = {}
questions = []

grammar = CFG.fromstring("""
	S -> Question
	Question -> QAW NOUN VERB NOUN

	""")

productions = grammar.productions()

verb=[]
noun = []
adjective=[]
pronoun = []

"""
Constructs pairs of question words and auxillary verb
def correct_combo():
	for p in auxillary_verbs:
		for i in question_words:
			string = i + " " + p
			matches = tool.check(string)
			correction = language_check.correct(string, matches)
			if  len([s for s in questions if any(correction in s for xs in correction)]) == 0:
				questions.append(correction)
			else:
				break
"""




def construct_init():
			   

   construct_add()
   
def construct_add():
	""" Allows user to ask a question.
		Store question and auxillary verb in variable
		Stores all the nouns of the sentence in a list
		Compares question with each sentence in text file 
		to determine which sentence will most likely contain
		the answer using common terms
		Analyse the sentence based on the type of question word i.e. Who, What, Where, How many etc.
		If the question contains Who or What most likely the answer will be a noun i.e Person Place etc
		If the question contains Where most likely the answer will be a location 
		If the question contains how many most likely the answer will be a quantity
	"""

	question1 = input('=====================================================================================================================================================\n \tThis software allows you to ask questions beginning with a Question word followed by an Auxillary Verb \n \n \tThis software version supports questions containing the question words and auxillary verbs:\n \tHow many, How much, Who is, Who are, Who were, Who was, When is, When are, When were and When was \n=======================================================================================================================================================\n\n What would you like to ask? \n\t') #Prompts user to enter a question
	question1 = question1.lstrip() #Making sure no space before the first character
	asked = nlp(question1)
	Question_word_Aux = asked[0].text + " "+asked[1].text #Stores the Question word and auxillary verb

	#VARIABLE INITIALIZATION
	noun_i = []
	remainder = []
	remainder_str= ""
	noun_s = 0
	verb_s = 0
	temp_sent = "s"
	answer = "find"
	answer_lst = []
	remain = " "
	dependencies = {}
	question = ""
	quant = dict()
	ant = []
	d = defaultdict(list)
	q = len(questions)
	keep = dict()
	count = 0
	lent = 0 
	track=0
	watch=0
	move = 0
	sentence = list(doc_file.sents)
	tred = list(asked.sents)
	#END OF VARIABLE INITIALIZATION 

	for token in asked.noun_chunks:   #Collects all the nouns within a sentence stores them in question
		question = question.join(token.text)
		#print(question)

		noun_i.append(token.text)
		
	for s in sentence:  #Iterates sentence
		""" This for determines which sentence in the text file has the most occurences of the words in the user question"""
		
		
		#while move < len(s):

		#print(watch)
		watch = len(s)
		#print(s)
		
		if track < watch:
			keep = {"Length":watch, "Index": count} 
			#print(watch)
			#print(count)
			count = count + 1
			#print(count)
			track = watch
					
		else:

			#keep = {"Length":track , "Index": count}
			count = count + 1
			#print(watch)
			#print(track)
	#print(keep)
			
	"""End of for loop"""	
	
	temp_sent = sentence[keep["Index"]].text  #Store the sentence that has the most occurences of words asked by user in temp_sent in text
	#print(temp_sent)
	depend = nlp(sentence[keep["Index"]].text)

	#print(depend[0].text)		  #Stores the same thing as temp_sent but stores it as an spaCy token instead
	quantity = sentence[keep["Index"]]
	
	time = sentence[keep["Index"]]
	#print(temp_sent)
	#print(keep)



	
		#print(h.dep_)
	"""if h.dep_ == "probj":
	print(h.dep_)
	depend[h.text] = h.head.text"""
	
	""" This block of code analyses the relevant sentence in text file to determine an answer based on the Question word and the auxillary verb used by a user  """


	if Question_word_Aux == "Who were":
		#print('Got there')
		progress = nlp(temp_sent)
		
		#for p in asked.noun_chunks:
		#	for s in depend.noun_chunks:

		"""ant.append(p)
		ant.append(s)

		
		print(s)
		
		if p.similarity(s) == 1.0:
			counter = 0
			print("Yes")
			print(s.text,p.text,s.similarity(p))
	
		if p.similarity(s) != 1.0:
			remainder.append(s.text)
		print(remainder)"""
		#break
		v=[]
		y = question1.split()
		v.append(y)
		#print(y)

		r = temp_sent.split()
		#print(r)
		#print(r[0])
	
	

		t = y + r
		#print(t)

		
		m = []
		frequency = collections.Counter(t)
		#print(frequency)
		for x  in frequency.keys():
			if frequency[x]==1:
				m.append(x)
		#print(m)

			
		


		"""for p in progress:
			print(p)
			for q in asked:
				print(q)
				if p.text == q.text:
					do = "Do nothing" """

			#remainder.append(p.text)
		#remain = " ".join(remainder)


		#print(remain)
		#print(remain)
		m = " ".join(m)
		remainder = nlp(m)


		
		#print(remainder)
		for r in remainder.ents:
			#print(r.text,r.label_)
			if r.label_ == "PERSON" or r.label_=="ORG" or r.label_=="NORP":
				#print("saw")
				answer_lst.append(r.text)
				#print(r.text)
				#print(answer_lst)
	if Question_word_Aux == "Who are":
		v=[]
		y = question1.split()
		v.append(y)
		#print(y)

		r = temp_sent.split()
		#print(r)
		#print(r[0])
	
	

		t = y + r
		#print(t)

		
		m = []
		frequency = collections.Counter(t)
		#print(frequency)
		for x  in frequency.keys():
			if frequency[x]==1:
				m.append(x)
		#print(m)

			
		


		"""for p in progress:
			print(p)
			for q in asked:
				print(q)
				if p.text == q.text:
					do = "Do nothing" """

			#remainder.append(p.text)
		#remain = " ".join(remainder)


		#print(remain)
		#print(remain)
		m = " ".join(m)
		remainder = nlp(m)

		for r in remainder.ents:
			#print(r.text,r.label_)
			if r.label_ == "PERSON" or r.label_=="ORG" or r.label_=="NORP":
				#print("saw")
				answer_lst.append(r.text)
				#print(r.text)
				#print(answer_lst)
		"""progress = nlp(temp_sent)
		for q in progress.noun_chunks:
			remainder.append(q.text)

		remain = " ".join(remainder)
		remainder = nlp(remain)

		for r in remainder.ents:
			if r.label_== "PERSON" or r.label_ == "ORG":
				answer_lst.append(r.text)"""

	if Question_word_Aux == "Who is":

		v=[]
		y = question1.split()
		v.append(y)
		#print(y)

		r = temp_sent.split()
		#print(r)
		#print(r[0])
	
	

		t = y + r
		#print(t)

		
		m = []
		frequency = collections.Counter(t)
		print(frequency)
		for x  in frequency.keys():
			if frequency[x]==1:
				m.append(x)
		#print(m)

			
		


		"""for p in progress:
			print(p)
			for q in asked:
				print(q)
				if p.text == q.text:
					do = "Do nothing" """

			#remainder.append(p.text)
		#remain = " ".join(remainder)


		#print(remain)
		#print(remain)
		m = " ".join(m)
		remainder = nlp(m)
		for r in remainder.ents:
			#print(r.text,r.label_)
			if r.label_ == "PERSON" or r.label_=="ORG" or r.label_=="NORP":
				print("saw")
				answer_lst.append(r.text)
		"""progress = nlp(temp_sent)
		for q in progress.noun_chunks:
			remainder.append(q.text)
		remain = remain.join(remainder)
		remainder = nlp(remain)
		for r in remainder.ents:
			if r.label_ == "PERSON" or r.label_=="ORG":
				answer = r.text"""

	if Question_word_Aux ==  "Where is":
		
		



		progress = nlp(temp_sent)
		for q in progress.noun_chunks:
			remainder.append(q.text)
		remain = remain.join(remainder)
		remainder = nlp(remain)
		for r in remainder.ents:
			if r.label_ == "GPE" or r.label_ == "LOC":
				#prepo = depend[r.text]0
				
				#prepo = depend[str(r.text)]
				answer = r.text

	if Question_word_Aux == "Where are":


		for h in depend:
			if h.dep_ == "probj":
				print(h.head.text)
				depend[h.text] = h.head.text

		progress = nlp(temp_sent)
		for q in progress.noun_chunks:
			remainder.append(q.text)
		remain = remain.join(remainder)
		remainder = nlp(remain)
		for r in remainder.ents:
			if r.label_ == "GPE" or r.label_ == "LOC":
				prepo = depend[r.text]
				answer_lst.append(prepo)
				answer_lst.append(r.text)

	if Question_word_Aux == "Where were":
		#print("Detect: Where were")
		for h in depend:
			if h.dep_ == "probj":
				depend[h.text] = h.head.text

		progress = nlp(temp_sent)
		for q in progress.noun_chunks:
			#print(q)
			remainder.append(q.text)
		#print(remainder)
		remain = remain.join(remainder)
		#print(remain)
		remainder = nlp(remain)
		#print("Printing remainder \n")
		#print(remainder)
		for r in remainder.ents:
			#print(remainder.ents)
			if r.label_ == "GPE" or r.label_ == "LOC":
				answer_lst.append(r.head.text)
				answer_lst.append(r.text)
	if Question_word_Aux == "How much":
		quantity1 = nlp(quantity.text)
		for h in quantity1.ents:
			if h.label_ == "MONEY":
				quant[h.label_] = h.text
				#quantity[h.text] = h.label_		
			#print(h.text)
			#if h.label_ == "MONEY":
			#depend[h.text] = h.head.text
		#print("How much")
		progress = nlp(temp_sent)

		#print(progress)
		#print(remain)
		#remainder = nlp(remain)
		#for r in remainder.ents:
		answer_lst.append(quant["MONEY"])
		print(answer_lst)
	if Question_word_Aux == "How many":
		quantity1 = nlp(quantity.text)
		for h in quantity1.ents:
			if h.label_ == "CARDINAL":
				answer_lst.append(h.text)
			if h.label_ == "QUANTITY":
				answer_lst.append(h.text)

	if Question_word_Aux == "When is" or Question_word_Aux == "When are" or Question_word_Aux == "When were" or Question_word_Aux == "When was":
		progress = nlp(temp_sent)
		print("saw when")
		for r in progress.ents: 
			print("vis")
			print(r)
			if r.label_ == "DATE":
				answer_lst.append(r.text)
			if r.label_ == "TIME":
				answer_lst.append(r.text)


			

	if answer == 'find':
		#print('Reach')
		if len(answer_lst)>0:
			#print("\n Processing Answer ...")
			#print("\nThis is the paragraph extract: \n")
			#print(doc_file)

			response = ",".join(answer_lst)
			response = response.lstrip(',')
			print("\n\t Answer:" +" "+response)
	else:
		print("\n"+""+answer)
	

	"""	End of Block"""
	
	


	


	""""
	#TEST BLOCK
	for token in doc_file:
		tokes.append((token.text,token.head.text))"""
		
	"""for k,v in tokes:
		depend[k].append(v)"""
	

	
	"""
	#TEST BLOCK
	for i in asked:
		contain = []
		contain.extend(depend[i.text])
	print(contain)"""
	



#CREATING A GRAMMAR TO GENERATE RULES
def literal_product(key,rhs):
	lhs = Nonterminal(key)
	return Production(lhs,[rhs])
def parse():
	# Make a local copy of productions
	lproductions = list(productions)
	# Add a production for question auxillary noun verb
	lproductions.extend([literal_product("QAW",qa) for qa in questions])
	lproductions.extend([literal_product("NOUN",n) for n in noun])
	lproductions.extend([literal_product("VERB",v) for v in verb])
	lproductions.extend([literal_product("NOUN",na) for na in noun])

	# Make a local copy of the grammar with extra productions
	lgrammar = CFG(grammar.start(), lproductions)

	# Load grammar into a parser
	parser = RecursiveDescentParser(lgrammar)
	print(lgrammar.productions())
	print(parser)
#END OF GRAMMAR BLOCK
def return_answer():
	question = input("What would you like to ask?")
	asked = nlp(question)

def main():
	construct_init()
if __name__ == "__main__":
	main()
	
				
		
		
			
								
							   
								

			
				
								
								
								
  
	
	   
		
		
