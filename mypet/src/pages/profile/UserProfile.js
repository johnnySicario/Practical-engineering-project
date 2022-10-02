import React from 'react';

function UserProfile(props) {
    return (
        <div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">First name</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Last name</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Age</label>
                <select class="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">18</option>
                    <option value="2">19</option>
                    <option value="3">20</option>
                    <option value="1">21</option>
                    <option value="2">22</option>
                    <option value="3">23</option>
                    <option value="1">24</option>
                    <option value="2">25</option>
                    <option value="3">26</option>
                    <option value="1">27</option>
                    <option value="2">28</option>
                    <option value="3">29</option>
                    <option value="1">30</option>
                    <option value="2">31</option>
                    <option value="3">32</option>
                    <option value="1">33</option>
                    <option value="2">34</option>
                    <option value="3">35</option>
                    <option value="1">36</option>
                    <option value="2">37</option>
                    <option value="3">38</option>
                    <option value="1">39</option>
                    <option value="2">40</option>
                    <option value="3">41</option>
                    <option value="3">42</option>
                    <option value="1">43</option>
                    <option value="2">44</option>
                    <option value="3">45</option>
                    <option value="1">46</option>
                    <option value="2">47</option>
                    <option value="3">48</option>
                    <option value="1">49</option>
                    <option value="2">50</option>
                    <option value="3">51</option>
                    <option value="1">52</option>
                    <option value="2">53</option>
                    <option value="3">54</option>
                    <option value="3">55</option>
                    <option value="1">56</option>
                    <option value="2">57</option>
                    <option value="3">58</option>
                    <option value="1">59</option>
                    <option value="2">60</option>
                    <option value="3">61</option>
                    <option value="1">62</option>
                    <option value="2">63</option>
                    <option value="3">64</option>
                    <option value="1">65</option>
                    <option value="2">66</option>
                    <option value="3">67</option>
                    <option value="3">68</option>
                    <option value="1">69</option>
                    <option value="2">70</option>
                    <option value="3">71</option>
                    <option value="1">72</option>
                    <option value="2">73</option>
                    <option value="3">74</option>
                    <option value="1">75</option>
                    <option value="2">76</option>
                    <option value="3">77</option>
                    <option value="1">78</option>
                    <option value="2">79</option>
                    <option value="3">80</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Pet breed</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Upload your pet</label>
  <input type="file" class="form-control" id="inputGroupFile01"/>
</div>
        </div>
    );
}

export default UserProfile;