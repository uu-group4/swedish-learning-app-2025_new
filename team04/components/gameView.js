import shuffleQuestions from "../utils/shuffleQuestions.js";
import progressBar from "./progressBar.js";

export default {
  name: "GameView",
  template: `
    <div class="game-container">
      <statistics></statistics>
      <section class="center-section">
        <clock
          v-if="currentQuestion"
          :hour="currentQuestion.hour"
          :minute="currentQuestion.minute"> 
        </clock>
        <cards 
          v-if="currentQuestion"
          :options="currentQuestion.options"
          :correct-index="currentQuestion.correctIndex"
          :selected-option="selectedOption"
          @select="selectOption">
        </cards>
      </section>
      <progress-bar :steps="questions.length" :active="currentIndex+1"></progress-bar>
      <navigation 
       @next="nextQuestion" 
       @prev="prevQuestion"
       :selectedOption="this.selectedOption">
      </navigation>
  </div>
  `,
  props: ["selectedLevel"],
  data() {
    return {
      level_1: "623a056b",
      level_2: "2c6d3f66",
      level_3: "47662d57",
      questions: [],
      answers: [],
      currentIndex: 0,
      selectedOption: null
    };
  },
  components: {
    'progress-bar': progressBar
  },
  created() {
    // get raw data for the selected level
    const levelKey = `level_${this.selectedLevel}`;
    const vocabId = this[levelKey];
    const rawData = window.vocabulary.get_team_data(vocabId);
    console.log("rawData type:", typeof rawData);
    console.log("rawData preview:", rawData);

    // shuffle questions and set current index to 0
    const parsed = JSON.parse(rawData);
    this.questions = shuffleQuestions(parsed);
    this.currentIndex = 0;
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex] || null;
  },
    isCorrect() {
      if (this.selectedOption === null) return false;
      return this.selectedOption === this.currentQuestion.correctIndex;
    },
    stepArray() {
    return Array.from({ length: this.steps }, (_, i) => i + 1);
  },
  },
    
  methods: {
    selectOption(index) {
      this.selectedOption = index;
       // create tuple-like object: { id: questionIndex, user: selectedIndex, correct: correctIndex }
      const id = this.currentIndex;
      const correct = this.currentQuestion ? this.currentQuestion.correctIndex : null;
      const entry = { id, user: index, correct };

      // update existing answer for this question or push new
      const existing = this.answers.find(a => a.id === id);
      if (existing) {
        existing.user = entry.user;
        existing.correct = entry.correct;
      } else {
        this.answers.push(entry);
      }
  },
    nextQuestion() {
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
        this.selectedOption = null;
        const q = this.questions[this.currentIndex];
        setClock(q.hour, q.minute);
      } else {
        this.$root.currentView = 'finish';
      }
    },
    prevQuestion() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        const stored = this.answers.find(a => a.id === this.currentIndex);
        this.selectedOption = stored ? stored.user : null;

        const q = this.questions[this.currentIndex];
        setClock(q.hour, q.minute);
      }
    }
  }
};

